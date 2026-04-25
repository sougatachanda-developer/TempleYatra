'use client'
import { useState } from 'react';
import SearchBar from '../SearchBar'
import Section from '../Section'
import TempleCard from '../TempleCard/page'

export default function HomePage({temples}:{temples: any[]}) {

    const [temp,setTemp] = useState(temples);

  return (
    <>
    <SearchBar templeData={temples} onFilteredTemples={setTemp}/>
      <Section title="Popular Temples" bg="bg-orange-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {temp.map((temple, index) => (
            <TempleCard key={index} temple={temple} />
          ))}
        </div>
      </Section>

      <Section title="Spiritual Routes">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Char Dham Yatra</h3>
            <p className="text-gray-600 mt-2">
              Sacred Himalayan pilgrimage route
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">12 Jyotirlingas</h3>
            <p className="text-gray-600 mt-2">
              Important Shiva temples across India
            </p>
          </div>
        </div>
      </Section>

      <Section title="Explore by Festival" bg="bg-orange-50">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Diwali</h3>
            <p className="text-gray-600 text-sm">
              Best temples to visit during Diwali
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Navratri</h3>
            <p className="text-gray-600 text-sm">
              Shakti temples & celebrations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Mahashivratri</h3>
            <p className="text-gray-600 text-sm">
              Major Shiva festival
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
