import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.dhsszivgvkfcfkyuxnir.supabase.co,
    process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoc3N6aXZndmtmY2ZreXV4bmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5OTk5NTUsImV4cCI6MjA2MjU3NTk1NX0.FsECb0OnNZjgCJyRytbJP1_LDxmyGbJbNhGyaxHtHBE
  )
}