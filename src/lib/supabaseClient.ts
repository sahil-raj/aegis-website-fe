import { createClient } from '@supabase/supabase-js';

// Ensure these environment variables are being accessed correctly
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Check if both the URL and the key are available
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or API key is missing!');
}

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
