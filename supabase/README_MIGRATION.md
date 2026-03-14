# Migration Supabase - Copy & Paste

**SQL Editor → Run these (1 by 1):**

1. Table:
```
CREATE TABLE contacts (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 tenant_id uuid REFERENCES tenants,
 name text,
 created_at timestamptz DEFAULT now()
);
```

2. RLS:
```
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Tenant contacts" ON contacts FOR ALL USING (tenant_id = (SELECT tenant_id FROM profiles WHERE id = auth.uid()));
```

3. Test:
```
INSERT INTO contacts (tenant_id, name) VALUES ('tenant-uuid', 'Test');
```

**Done!** RLS multitenant working.
