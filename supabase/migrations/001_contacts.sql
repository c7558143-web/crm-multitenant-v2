-- Contacts table only
CREATE TABLE IF NOT EXISTS public.contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id uuid REFERENCES public.tenants(id),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);
