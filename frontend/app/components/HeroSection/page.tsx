import React from 'react'

function HeroSection() {
  return (
    <div className='mt-18 z-1 p-1 overflow-hidden h-full'>
        <section className="h-full bg-center bg-cover flex relative">
            <div className="w-screen h-120 relative">
                <img src="https://images.pexels.com/photos/12203058/pexels-photo-12203058.jpeg" alt="Hero Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

        <div className="absolute flex flex-col ml-48 mt-16 justify-center items-center h-full text-secondary text-center px-6">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-1 font-heading">
            Explore Sacred Journeys Across India
            </h1>

            <p className="mb-6 text-lg font-bodyText md:text-xl text-white">
            Discover temples, routes & spiritual experiences
            </p>
        </div>
        </section>
    </div>
  )
}
export default HeroSection