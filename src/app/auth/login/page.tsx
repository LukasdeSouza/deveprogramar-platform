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
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon } from "lucide-react"
// import { Label } from "@/components/ui/label"

const LoginPage = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            digite seu email abaixo para entrar em sua conta.
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
        <CardFooter>
          <Button className="w-full bg-mediumDark hover:bg-deepDark">
            Entrar
          <ChevronRightIcon className='text-primary h-4 w-4 ml-2' />
          </Button>
        </CardFooter>
        <Separator/>
        <div className="flex flex-col items-center gap-2 px-6 mb-6">
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
