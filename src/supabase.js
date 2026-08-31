import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://hzzmkcvekefzhykeunqv.supabase.co',
  'sb_publishable_gr2D7nBs6cj12mJ9yHyVLQ_piaBWoSt'
);

export const PRODUCT_BUCKET = 'product-images';
