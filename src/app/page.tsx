"use client"

import { Button, FluentProvider, webLightTheme } from "@fluentui/react-components"

export default function Home() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button onClick={() => { alert("Hola") }} appearance="primary">Check Button</Button>
    </FluentProvider>
  )
}
