-- Migration: Tasks table (multitenant)
CREATE TABLE IF NOT EXISTS public.tasks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  description text,
  status text DEFAULT 'pending',
  due_date timestamptz,
  deal_id uuid REFERENCES public.deals(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

