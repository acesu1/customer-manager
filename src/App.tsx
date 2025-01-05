import './index.css'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ClerkProvider } from '@clerk/clerk-react'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ConvexProvider client={convex}>
          <RouterProvider router={router} />
        </ConvexProvider>
      </ClerkProvider>
    </ThemeProvider>
  )
}
