-- Custom fields for enterprise flexibility
CREATE TABLE IF NOT EXISTS public.custom_fields (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tenant_id uuid REFERENCES public.tenants(id) ON DELETE CASCADE,
  entity_type text NOT NULL CHECK (entity_type IN ('contact', 'deal', 'company', 'task')),
  name text NOT NULL,
  \"type\" text NOT NULL CHECK (\"type\" IN ('text', 'number', 'date', 'select', 'boolean')),
  options jsonb,
  required boolean DEFAULT false,
  position integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_custom_fields_tenant_entity ON public.custom_fields USING btree (tenant_id, entity_type);

