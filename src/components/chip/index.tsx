import { Code } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface Props {
  icon: React.ReactNode,
  label: string
}

const Chip = ({icon, label}: Props) => {
  return (
    <div className='bg-deepDark px-4 py-1 transition ease-in-out border border-secondary 
    hover:border-primary hover:-translate-y-1 rounded-xl w-fit'>
      <div className='flex flex-row items-center gap-1'>
        {icon}
        <small className='font-semibold text-light'>
          {label}
        </small>
      </div>
    </div>
  )
}

export default Chip