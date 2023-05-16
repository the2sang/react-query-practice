'use client'

import './globals.css'
import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
      <>
        <html lang="en">
        <QueryClientProvider client={queryClient}>
          <body>{children}</body>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-left"/>
        </QueryClientProvider>

        </html>
      </>
  )
}
