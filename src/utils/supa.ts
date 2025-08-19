import { createClient } from "@supabase/supabase-js";
const SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://kpwxvyegjhfxmrhuxvci.supabase.co'
const SUPA_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd3h2eWVnamhmeG1yaHV4dmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDk4OTIsImV4cCI6MjA2OTk4NTg5Mn0.XZYVYVAV9COIE-ZAqXYbqFz9OL7h06DMd6tderP8BNw'
export const supa = createClient(SUPA_URL, SUPA_KEY)