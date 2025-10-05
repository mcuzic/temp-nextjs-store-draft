import { createClient } from '@supabase/supabase-js';

const bucket = 'mian-bucket';

const SUPABASE_URL = 'https://jbegmqmmkylhyxmzznvy.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWdtcW1ta3lsaHl4bXp6bnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODgxNjgsImV4cCI6MjA2ODk2NDE2OH0.Lmqis1D3zYFYOrqSLDkdEmJ7UXcgSPUgPYpg3zQ6Glk';

export const supabase = createClient(
  SUPABASE_URL as string,
  SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });
  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = async (url: string) => {
  const imageName = url.split('/').pop();
  if (!imageName) throw new Error('Invalid URL');
  return supabase.storage.from(bucket).remove([imageName]);
};
