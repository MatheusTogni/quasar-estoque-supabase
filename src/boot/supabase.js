import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://epbhjeiqnfmphoxkjyvb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYmhqZWlxbmZtcGhveGtqeXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxODkwNDYsImV4cCI6MjA1Mzc2NTA0Nn0.OXb2yDz35Nzi_rmXtTye26FM5HC76J2pKLqA_m6Gs1Q'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function useSupabase () {
  return { supabase }
}
