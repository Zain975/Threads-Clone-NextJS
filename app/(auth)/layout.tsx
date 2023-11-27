// it allows us to specify different roles for the authentication routes
import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
import "../globals.css"
import { dark } from "@clerk/themes";

export const metadata = {
    title : 'Threads',
    description: 'a Next.js app threads'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}:{children : React.ReactNode}){
    return (
        <ClerkProvider appearance={{
            baseTheme: dark,
          }}>
            <html lang="en">
                <body className={ `${inter.className} bg-dark-1 `}  >
                    {children }
                </body>
            </html>

        </ClerkProvider>
    )
}