import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rtrxfzaitocellyuhjdb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmZuamp5cnpvdXRqaGZhcmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzI3NzQsImV4cCI6MjA2MjA0ODc3NH0.qxX6xS7VmfFU5kJ5-8f7iklcFN4pfDH4ep6obD_ern4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);