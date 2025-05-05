
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oonfnjjyrzoutjhfarag.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vbmZuamp5cnpvdXRqaGZhcmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NzI3NzQsImV4cCI6MjA2MjA0ODc3NH0.qxX6xS7VmfFU5kJ5-8f7iklcFN4pfDH4ep6obD_ern4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
