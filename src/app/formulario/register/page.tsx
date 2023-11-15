'use client'

import { useForm } from 'react-hook-form'
import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { Field, Input, Label, Button } from "@fluentui/react-components"
import { useRouter } from 'next/navigation';

interface FormData {
    name: string;
    password: string
}

function RegisterPage() {
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>()
    const router = useRouter()
    const onSubmit = handleSubmit( async (user) => {
        const res = await fetch ("/api/auth/crudusers", {
            method: "POST", 
            body: JSON.stringify({
                name: user.name,
                password: user.password,     
            }),
            headers: {
                "content-type": "aplication/json",
            },
        })
        if (res.ok){
            router.push("/formulario/register")
        }
        console.log(errors)        
    })
    
    return (
        <FluentProvider theme={webLightTheme}>
        <div className="w-screen h-screen box-border bg-slate-100 flex items-center justify-center">
            <form className="bg-white w-1/3 h-4/6 flex flex-col py-12 px-8 justify-around"
             onSubmit={onSubmit}>
            <Field>
                <Label size="large">Nombre de Usuario</Label>
                <Input size="large" placeholder='nombre apellido'
                 { ... register("name",{
                    required:
                    {value:true,
                    message:'campo requerido'}
                    })}></Input>
                    {errors.name && <span>{errors.name.message}</span>}
            </Field>
            <Field>
                <Label size="large">Contraseña</Label>
                <Input size="large" type="password" 
                 placeholder='**********'
                 { ... register('password',{
                    required:
                    {value:true,
                    message:'campo requerido'}})}
                    ></Input>
                    {errors.password && <span>{errors.password.message}</span>}
            </Field> 
            <Field>
              <Button size="large" type='submit' appearance="primary">REGISTRAR</Button>
          </Field>  
            </form>
        </div>
        </FluentProvider>
    )
}
export default RegisterPage