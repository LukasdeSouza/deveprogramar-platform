import React from 'react'
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
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
import Link from 'next/link'

const CadastroPage = () => {

  return (
    <div className='flex w-full h-full items-center justify-center m-auto'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Crie seu Usuário</CardTitle>
          <CardDescription>Acesse a plataforma e comece a aprender.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className='text-xs' htmlFor="name">Nome</label>
                <Input id="name" placeholder="Harry Potter" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className='text-xs' htmlFor="name">Email</label>
                <Input id="name" placeholder="harry@hogwarts.net" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className='text-xs' htmlFor="name">Sua Senha</label>
                <Input id="name" placeholder="*********" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label className='text-xs' htmlFor="name">Confirmar Senha</label>
                <Input id="name" placeholder="*********" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={'/'}>
            <Button variant="outline">
              <ChevronLeftIcon className='text-warning h-4 w-4 mr-1'/>
              Voltar
            </Button>
          </Link>
          <AnimatedSubscribeButton
            buttonColor="#3333"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={
              <span className="font-normal group inline-flex items-center">
                Concluir{" "}
                <ChevronRightIcon className="text-primary ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            }
            changeText={
              <span className="font-normal group inline-flex items-center text-light">
                <CheckIcon className="text-primary mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                Boa!{" "}
              </span>
            }
          />
        </CardFooter>
      </Card>
    </div>
  )
}


export default CadastroPage