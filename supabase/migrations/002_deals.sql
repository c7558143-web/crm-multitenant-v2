-- Deals table (same as contacts)
CREATE TABLE IF NOT EXISTS public.deals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id uuid REFERENCES public.tenants(id),
  title text NOT NULL,
  created_at timestamptz DEFAULT now()
);
