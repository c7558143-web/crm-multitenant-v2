# PLAN MEJORAS CRM Multitenant Enterprise

## Información Recopilada
**Estado Actual (análisis src/, Supabase schemas, API routes):**
- Next.js 16 App Router + Tailwind + Headless UI + Supabase SSR.
- **Multitenancy básica:** Tables `tenants`, `profiles` (roles: owner/admin/user), `contacts/deals/tasks` filtrados por `tenant_id`.
- **Auth:** Supabase Auth + ClientContext + middleware que protege /dashboard.
- **CRUD APIs:** contacts/deals/tasks con GET/POST tenant-scoped (no PUT/DELETE aún).
- **UI:** Landing moderna (Hero, Features, Pricing, Testimonials), Dashboard simple (listas básicas).
- **Faltan:** RBAC enforcement, tenant onboarding, reporting, activities, pipelines, integrations.

**Limitaciones actuales:**
- No RLS (Row Level Security) verificada en queries.
- CRUD incompleto (solo GET/POST).
- Dashboard básico sin charts/search/filter/pagination.
- No tenant switching/org management.
- No enterprise features (analytics, audit logs, API keys, webhooks).

## Features CRM Enterprise Multitenant Necesarias
Basado en Salesforce/Hubspot/Zoho enterprise:
1. **Tenant Management:** Onboarding, subdomain routing, subscription (Stripe), billing dashboard.
2. **RBAC Avanzado:** Permissions granulares (read/write/delete by module), roles custom.
3. **Contacts:** Companies, custom fields, dedupe, enrichment (Clearbit), segments/tags.
4. **Deals/Pipeline:** Stages configurables, forecasting, won/lost analytics, currency multi.
5. **Tasks/Activities:** Calendar integration, recurring, assignments, timeline.
6. **Reporting/Analytics:** Dashboards (revenue, pipeline, churn), custom reports, export CSV/PDF.
7. **Integrations:** Email (SendGrid), Calendar (Google), Zapier webhooks.
8. **Enterprise:** Audit logs, API rate limiting, SSO (Auth0), white-label, usage quotas.
9. **UI/UX:** Table Pro (TanStack), charts (Recharts), search, filters, bulk actions.
10. **Performance:** Pagination infinite scroll, caching (React Query), realtime Supabase.

## Plan de Actualización (File Level)
**Fase 1 - Core Multitenant (1 semana):**
- `src/middleware.ts`: Agregar tenant subdomain resolution.
- `src/lib/supabase/server.ts`: Helper RLS policies enforcement.
- `supabase/migrations/*`: Add companies, custom_fields, activities tables.
- `src/types/supabase.ts`: Update types.

**Fase 2 - CRUD Completo + RBAC (1 semana):**
- `src/app/api/*`: Add PUT/DELETE/PATCH con RBAC check.
- `src/components/dashboard/*`: TanStack Table, forms (React Hook Form), modals.
- `src/contexts/TenantContext.tsx`: New (nuevo archivo).

**Fase 3 - Enterprise Features (2 semanas):**
- `src/app/tenant/[subdomain]/...`: Dynamic routing.
- `src/app/dashboard/reports/page.tsx`: New analytics.
- `src/app/dashboard/settings/...`: Billing, integrations.

**Archivos Dependientes a Editar/Crear (30+):**
Backend: supabase/migrations/*.sql, src/app/api/*/*.ts (8), src/types/supabase.ts.
Frontend: src/components/dashboard/* (new tables, charts), src/app/dashboard/*.
New folders: src/app/api/companies/, src/components/tables/, src/hooks/.

## Followup Steps
1. Run `npx supabase db push` after migrations.
2. Install deps: `npm i @tanstack/react-table recharts react-hook-form stripe @hookform/resolvers lucide-react`.
3. Test: `npm run dev`, manual tenant creation.
4. Deploy Supabase RLS policies.

**¿Confirmas este plan? ¿Prioridades específicas (ej: reports primero)? ¿Presupuesto tiempo (2-3 semanas)?**


