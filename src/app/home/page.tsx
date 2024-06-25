import { NavigationBar } from '@/components/navbar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <nav className="flex flex-row items-center px-4 py-2">
        <ul className="flex-1 font-black">
          <p>@deveprogramar</p>
        </ul>
        <NavigationBar />
      </nav>
    </div>
  )
}

export default HomePage