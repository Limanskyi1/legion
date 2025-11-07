import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { RegistrationRequest } from "../types";
import { registrationApi } from "../../api/registration-api";
import { toast } from "sonner";

export const useRegistrationMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: RegistrationRequest) => registrationApi.signUp(data),
    onSuccess: () => {
      toast.success("Регистрация прошла успешно!");
      navigate("/");
    },
    onError: (error:Error) => {
      toast.error(error.message || "Неизвестная ошибка при регистрации");
    },
  });
};