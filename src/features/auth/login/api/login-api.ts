import { supabase } from "@/shared/lib/supabase/client";
import type { LoginRequest } from "../model/types/lndex";

export const loginApi = {
    signInWithPassword: async (data: LoginRequest) => {
        const response = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,
        });
        if(response.error) throw response.error;
        return response;
    },
};
