-- کافه نعنا | فقط برای بررسی امنیت
-- این فایل داده‌ای را تغییر نمی‌دهد.
-- آن را در Supabase SQL Editor اجرا کن و خروجی را بررسی کن.

-- 1) RLS باید فعال باشد.
select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled,
  c.relforcerowsecurity as force_rls
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('products', 'admin_users');

-- 2) سیاست‌های موجود را ببین.
select
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('products', 'admin_users')
order by tablename, policyname;

-- 3) مجوزهای مستقیم نقش‌ها را ببین.
select
  grantee,
  table_schema,
  table_name,
  privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name in ('products', 'admin_users')
  and grantee in ('anon', 'authenticated')
order by table_name, grantee, privilege_type;

-- 4) تابع بررسی مدیر را ببین.
select
  n.nspname as schema_name,
  p.proname as function_name,
  pg_get_function_identity_arguments(p.oid) as arguments,
  pg_get_function_result(p.oid) as result_type,
  p.prosecdef as security_definer
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where p.proname = 'is_admin';

-- نکته:
-- برای products باید public SELECT فقط آن چیزی باشد که منوی عمومی لازم دارد.
-- UPDATE برای authenticated باید فقط از مسیر policy مدیر مجاز شود.
-- service_role نباید هیچ‌وقت داخل فایل‌های مرورگر قرار بگیرد.
