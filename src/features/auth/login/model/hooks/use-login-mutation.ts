import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../types/lndex";
import { loginApi } from "../../api/login-api";
import { toast } from "sonner";

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
        mutationFn: async (data: LoginRequest) => loginApi.signInWithPassword(data),
        onSuccess: () => {
            toast.success("Успешный вход!");
            navigate("/");
        },
        onError: (error: Error) => {
            toast.error(error.message || "Неизвестная ошибка при входе");
        },
    });
}