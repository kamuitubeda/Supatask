import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://gkejeggnthubqwktnevo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZWplZ2dudGh1YnF3a3RuZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MTM3ODQsImV4cCI6MjAxMDA4OTc4NH0.tChbYMN3RearQ4exFo5GY40Yjafxw60e_wC3h4qUfx0');

export default supabase;