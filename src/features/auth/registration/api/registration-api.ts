import { supabase } from "@/shared/lib/supabase/client";
import type { RegistrationRequest } from "../model/types";

export const registrationApi = {
    signUp: async (data: RegistrationRequest) => {
        const { data: registrationData, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        });
        if (error) throw error;

        if (registrationData.user) {
            const { error: profileError } = await supabase.from("user_profiles").insert([
                {
                    id: registrationData.user.id,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: registrationData.user.email,
                    phone: data.phone,
                    birth_date: data.birthDate.toISOString().split("T")[0],
                },
            ]);

            if (profileError) throw profileError;
        }

        return registrationData.user;
    },
};
