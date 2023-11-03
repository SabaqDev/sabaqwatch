"use client"

import { Button, FluentProvider } from "@fluentui/react-components"

export default function Home() {
  return (
    <FluentProvider>
      <Button appearance="primary">Check Button</Button>
    </FluentProvider>
  )
}
