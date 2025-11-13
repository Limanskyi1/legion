import { supabase } from "@/shared/lib/supabase/client";

export const getAllUser = async () => {
  try {
    const { data, error } = await supabase.from("user_profile").select("*");
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};