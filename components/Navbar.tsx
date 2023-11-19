'use client'
import { LoginButton, LogoutButton } from "./LoginButtons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export const Navbar = ({ session }: any) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <button className="navbarButton">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[400px] flex flex-col mx-10">
            <NavigationMenuLink className="hover:bg-slate-50 text-lg" href="/">
              Home
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-slate-50 text-lg" href="/admin">
              Admin Control Panel
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:bg-slate-50 text-lg" href="/planning">
              Planning
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
          