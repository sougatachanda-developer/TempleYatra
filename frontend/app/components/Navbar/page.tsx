import React from 'react'

export default function Navbar() {
  return (
    <main>
        <nav className="shadow-md fixed w-full z-10 bg-customBg">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                
                <h1 className="text-2xl font-bold font-heading text-primary">TempleYatra</h1>

                <ul className="hidden md:flex space-x-6 text-text-color font-medium font-bodyText">
                <li className="hover:text-primary cursor-pointer">Home</li>
                <li className="hover:text-primary cursor-pointer">Temples</li>
                <li className="hover:text-primary cursor-pointer">Routes</li>
                <li className="hover:text-primary cursor-pointer">Festivals</li>
                </ul>

            </div>
        </nav>
    </main>
  )
}
