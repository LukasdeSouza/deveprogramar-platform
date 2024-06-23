"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "../icons"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Javascript/Typescript",
    href: "/docs/primitives/alert-dialog",
    description:
      "Aprenda como utilizar Javascript e criar projetos de verdade.",
  },
  {
    title: "React/React Native",
    href: "/docs/primitives/hover-card",
    description:
      "Aprenda a criar aplicações web e mobile",
  },
  {
    title: "NodeJs",
    href: "/docs/primitives/progress",
    description:
      "Aprenda a criar API's Rest para suas aplicações.",
  },
  {
    title: "PostgreSQL e MongoDB",
    href: "/docs/primitives/scroll-area",
    description: "Entenda tudo sobre banco de dados relacional e não relacional",
  },
  {
    title: "Mobx e Redux",
    href: "/docs/primitives/tabs",
    description:
      "Aprenda gerenciamento de estados globais de aplicações",
  },
  {
    title: "GraphQL e muito mais",
    href: "/docs/primitives/tooltip",
    description:
      "Chega de ficar preso só em API's Rest, entenda sobre GraphQL",
  },
]

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.spinner className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Seja Dev!
                    </div>
                    <p className="text-sm font-light leading-tight text-muted-foreground">
                      Entenda sobre backend, frontend, banco de dados, mobile mais um pouco.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Frontend">
                HTML, CSS, Javascript, React, Typescript e +
              </ListItem>
              <ListItem href="/docs/installation" title="Backend">
                NodeJs, Express, Nest, Banco de dados e +
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Mobile">
                React Native, Flutter, Ionic, Google Playstore e +
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Linguagens de Programação</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Me Cadastrar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-light text-base",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
