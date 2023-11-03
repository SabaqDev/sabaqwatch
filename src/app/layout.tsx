"use client"

import './globals.css'

import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
