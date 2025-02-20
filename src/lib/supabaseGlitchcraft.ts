import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_GLITCH!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_GLITCH!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseGlitchcraft = supabase;
export default supabaseGlitchcraft;
