export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          subdomain: string | null
          industry: string | null
          logo_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          subdomain?: string | null
          industry?: string | null
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          subdomain?: string | null
          industry?: string | null
          logo_url?: string | null
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          tenant_id: string
          role: 'owner' | 'admin' | 'user'
          full_name: string | null
          avatar_url: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          tenant_id: string
          role?: 'owner' | 'admin' | 'user'
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
        }
        Update: {
          tenant_id?: string
          role?: 'owner' | 'admin' | 'user'
          full_name?: string | null
          avatar_url?: string | null
          updated_at?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          tenant_id: string
          plan: 'free' | 'pro' | 'business'
          status: 'active' | 'cancelled' | 'paused'
          current_period_start: string
          current_period_end: string
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          plan: 'free' | 'pro' | 'business'
          status?: 'active' | 'cancelled' | 'paused'
          current_period_start?: string
          current_period_end?: string
          created_at?: string
        }
        Update: {
          tenant_id?: string
          plan?: 'free' | 'pro' | 'business'
          status?: 'active' | 'cancelled' | 'paused'
          current_period_start?: string
          current_period_end?: string
        }
      }
      contacts: {
        Row: {
          id: string
          tenant_id: string
          name: string
          email: string | null
          phone: string | null
          company: string | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          email?: string | null
          phone?: string | null
          company?: string | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          tenant_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          company?: string | null
          notes?: string | null
        }
      }
      deals: {
        Row: {
          id: string
          tenant_id: string
          title: string
          value: number | null
          stage: string
          contact_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          title: string
          value?: number | null
          stage?: string
          contact_id?: string | null
          created_at?: string
        }
        Update: {
          tenant_id?: string
          title?: string
          value?: number | null
          stage?: string
          contact_id?: string | null
        }
      }
      tasks: {
        Row: {
          id: string
          tenant_id: string
          title: string
          description: string | null
          status: 'pending' | 'in_progress' | 'completed'
          due_date: string | null
          deal_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          title: string
          description?: string | null
          status?: 'pending' | 'in_progress' | 'completed'
          due_date?: string | null
          deal_id?: string | null
          created_at?: string
        }
        Update: {
          tenant_id?: string
          title?: string
          description?: string | null
          status?: 'pending' | 'in_progress' | 'completed'
          due_date?: string | null
          deal_id?: string | null
        }
      }
    }
  }
}
