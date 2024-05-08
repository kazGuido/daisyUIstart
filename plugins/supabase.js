import { defineNuxtPlugin } from 'nuxt/app';
import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(nuxtApp => {
const supabaseUrl = 'https://mmnftryzouvmhobucyvm.supabase.co' // Replace with your actual Supabase project URL
const supabaseAnonKey = 'process.env.SUPABASE_KEY' // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// You can make the Supabase client available globally via nuxtApp
nuxtApp.provide('supabase', supabase);
});
