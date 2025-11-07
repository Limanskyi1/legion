import z from "zod";

export const registrationSchema = z.object({
  firstName: z.string().min(1, "Введите имя"),
  lastName: z.string().min(1, "Введите фамилию"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(10, "Введите номер телефона"),
  birthDate: z.date({ error: "Выберите дату рождения" }),
  password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"],
});