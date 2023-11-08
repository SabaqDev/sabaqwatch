"use client"

import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { Field, Input, Label, Button } from "@fluentui/react-components"

export default function Home() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="w-screen h-screen box-border bg-slate-100 flex items-center justify-center">
        <div className="bg-white w-1/3 h-4/6 flex flex-col py-12 px-8 justify-around">
          
          <h1 className="text-3xl">Iniciar Sesión</h1>

          <Field>
            <Label size="large">Nombre de Usuario</Label>
            <Input size="large" placeholder="amorris"></Input>
          </Field>
          <Field>
            <Label size="large">Contraseña</Label>
            <Input size="large" type="password" placeholder="Ingrese su contraseña"></Input>
          </Field>

          <Field>
            <Button size="large" appearance="primary">Ingresar</Button>
          </Field>
        </div>
      </div>
    </FluentProvider>
  )
}
