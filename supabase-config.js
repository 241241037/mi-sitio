// Datos de tu proyecto: Supabase → Project Settings → API Keys.
// Usa SOLO la llave pública (anon / publishable). NUNCA la "service_role" o "secret".
const SUPABASE_URL = 'https://ekbhokheyxyfwcdxrvet.supabase.co';
const SUPABASE_KEY = 'sb_publishable_yBP5CxqNwToWcX_4ApjlSQ_8JIwb7hJ';

// Desde aquí, "supabase" es el cliente conectado a tu proyecto.
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
