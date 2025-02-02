import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://uosbwevnnepsncuunntk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvc2J3ZXZubmVwc25jdXVubnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMjA5ODAsImV4cCI6MjA1Mzc5Njk4MH0.ddWd-Y1o8l6XI054HL6NgHaCaoMTmnOXHb6l77teOKI')