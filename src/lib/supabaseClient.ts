import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rtrxfzaitocellyuhjdb.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0cnhmemFpdG9jZWxseXVoamRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5OTc2OTIsImV4cCI6MjA2MjU3MzY5Mn0.Nu1RrDGesmTfjKdVfN41acpr5HJowdkK-9rcKTEW4No'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)