import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jdjfqbvgazzrqwuxerjq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkamZxYnZnYXp6cnF3dXhlcmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxODA3NjUsImV4cCI6MjAwODc1Njc2NX0.tU4Cahuq7RtFmagpuNSyl1M5X6s27RPA8MOt_mo9PGY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;