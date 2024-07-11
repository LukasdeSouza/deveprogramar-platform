import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ChevronRightIcon, GithubIcon, User2Icon } from "lucide-react"
import Link from "next/link"

const LoginPage = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm border-mediumDark">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            se autentique para acessar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="hogwarts@example.com" required />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Senha</label>
            <Input id="password" placeholder="*******" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-secondaryDark hover:bg-mediumDark transition ease-in-outdelay-100 hover:scale-105">
            Fazer Login
            <ChevronRightIcon className='text-primary h-4 w-4 ml-2' />
          </Button>
          <Link className="w-full" href={'/auth/cadastro'}>
            <Button variant={'outline'} className="w-full border-secondaryDark hover:bg-mediumDark transition ease-in-outdelay-100 hover:scale-105">
              Me Cadastrar
              <User2Icon className='text-primary h-4 w-4 ml-2' />
            </Button>
          </Link>
        </CardFooter>
        <div className="px-8">
          <Separator className="bg-mediumDark"/>
        </div>
        <div className="flex flex-col items-center gap-2 px-6 my-4 mb-6">
          <small className="font-extralight">ou se preferir</small>
          <Button className="w-full hover:bg-mediumDark" variant={'outline'}>
            Entrar com Github
            <GithubIcon className="ml-2 w-5 h-5"/>
          </Button>
        </div>
      </Card>
    </section>
  )
}

export default LoginPage
