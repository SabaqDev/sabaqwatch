"use client"

import { Button, FluentProvider, webLightTheme } from "@fluentui/react-components"

export default function Home() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button onClick={() => { alert("Hola 2") }} appearance="primary">login</Button>
    </FluentProvider>
  )
}
