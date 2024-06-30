
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hmsnqetqgfjppqomnyct.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhtc25xZXRxZ2ZqcHBxb21ueWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MzYyNjgsImV4cCI6MjAzNTMxMjI2OH0.uOnqE5MQVJxW-I60WtgcbxfIiEH8ll7AQA3Zk9ciTq0"
export const supabase = createClient(supabaseUrl, supabaseKey)

