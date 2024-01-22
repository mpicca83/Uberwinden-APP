import { object, string, ref} from "yup"

export const formValidation = object({
    confirmPassword:string()
        .required("Vuelva a ingresar la contraseña")
        .oneOf([ref("password")],"Las contraseñas no son iguales"),
    password:string()
        .required("Ingrese una contraseña")
        .min(6,"Minimo 6 caracteres"),
    email:string()
        .required("Ingrese un mail")
        .email("Ingrese un mail valido"),
})

export const formLogin = object({
    password:string()
        .required("Ingrese una contraseña")
        .min(6,"Minimo 6 caracteres"),
    email:string()
        .required("Ingrese un mail")
        .email("Ingrese un mail valido"),
})