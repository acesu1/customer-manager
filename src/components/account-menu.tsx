import { SignInButton, useClerk } from '@clerk/clerk-react'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { SignedIn, SignedOut } from '@clerk/clerk-react'

export function AccountMenu() {
  const { signOut, openUserProfile } = useClerk()

  return (
    <>
      <SignedIn>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex select-none items-center gap-2"
              >
                {/* account name */}
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              <DropdownMenuLabel className="flex flex-col">
                <>
                  Douglas Souza
                  <span className="text-xs font-normal text-muted-foreground">
                    dev@hotmail.com
                  </span>
                </>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DialogTrigger asChild>
                  <DropdownMenuItem onClick={() => openUserProfile()}>
                    <Building className="mr-2 size-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItem
                  asChild
                  className="text-rose-500 dark:text-rose-400"
                >
                  <button className="w-full" onClick={() => signOut()}>
                    <LogOut className="mr-2 size-4" />
                    <span>Sair</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Dialog>
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}
