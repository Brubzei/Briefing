-- Cole este arquivo inteiro no Supabase: SQL Editor > New query > Run

create table if not exists public.briefings (
  id uuid primary key default gen_random_uuid(),
  order_number bigint generated always as identity,
  created_at timestamptz not null default now(),
  status text not null default 'Briefing enviado' check (status in (
    'Aguardando preenchimento','Em preenchimento','Briefing enviado','Em análise',
    'Aguardando informações adicionais','Aprovado para produção','Em produção')),
  event_type text not null check (char_length(event_type) <= 100),
  event_group text,
  event_name text check (char_length(event_name) <= 300),
  event_date date,
  client_name text not null check (char_length(client_name) between 1 and 200),
  client_email text not null check (char_length(client_email) between 3 and 200),
  client_whatsapp text not null check (client_whatsapp ~ '^[0-9]{10,13}$'),
  answers jsonb not null default '{}'::jsonb check (pg_column_size(answers) < 200000),
  files jsonb not null default '[]'::jsonb check (pg_column_size(files) < 50000),
  features text[] not null default '{}',
  extra_services text[] not null default '{}',
  consent_accepted boolean not null default false,
  internal_notes text
);

alter table public.briefings enable row level security;

-- Visitantes (anon) só podem ENVIAR um briefing novo. Não conseguem ler, editar nem apagar nada.
drop policy if exists "clientes enviam briefing" on public.briefings;
create policy "clientes enviam briefing" on public.briefings
  for insert to anon
  with check (status = 'Briefing enviado' and consent_accepted is true and internal_notes is null);

-- Pasta privada para fotos, logotipos e PDFs (até 20 MB por arquivo)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('briefing-files', 'briefing-files', false, 20971520,
  array['image/jpeg','image/png','image/webp','image/gif','image/heic','image/heif','application/pdf','video/mp4'])
on conflict (id) do update set file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "clientes enviam arquivos" on storage.objects;
create policy "clientes enviam arquivos" on storage.objects
  for insert to anon with check (bucket_id = 'briefing-files');

-- Você vê tudo pelo painel do Supabase (Table Editor e Storage), que ignora estas regras.
-- Não crie regras de leitura para "authenticated" sem antes desativar o cadastro público
-- (Authentication > Sign In / Providers), senão qualquer pessoa poderia ler os briefings.
