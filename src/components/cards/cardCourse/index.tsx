import Chip from '@/components/chip'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'
import { NextPage } from 'next'
import React from 'react'

interface CardCourseProps {
  title: string,
  description: string,
  complexity: string
}

const CardCourse: NextPage<CardCourseProps> = ({ title, description, complexity }) => {
  return (
    <Card className='flex-1 border-mediumDark transition ease-in-out delay-150 
    hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 hover:border-primary'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='min-h-16 text-xs'>
          {description}
        </CardDescription>
        <div className='flex flex-col gap-1'>
          <p className='text-xs'>Complexidade:</p>
          <Chip
            icon={<BarChart className='text-primary w-3 h-3' />} 
            label={complexity}
          />
        </div>
      </CardHeader>
      <CardFooter>
        <Button className='w-full bg-secondaryDark hover:bg-secondary'>
          Quero Aprendar!
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardCourse