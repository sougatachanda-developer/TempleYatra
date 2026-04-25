'use client'
import React, { useState } from 'react'

function SearchBar({templeData, onFilteredTemples}:{templeData: any, onFilteredTemples: React.Dispatch<React.SetStateAction<any[]>>}) {
    //const [filteredTemples, setFilteredTemples] = useState(templeData);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deity,setDeity] = useState<string>("");
    const [state,setState] = useState<string>("");

    // Extract unique states and deities for dropdowns
    const states = [...new Set(templeData.map((temple: any) => temple.state))];
    const deities = [...new Set(templeData.map((temple: any) => temple.deity))];

    const handleSearchFilter = () => {
        let filteredTemples = templeData;
        
        if (searchTerm.trim() !== " ") {
            filteredTemples = filteredTemples.filter((temple: any) =>
                temple.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            onFilteredTemples(filteredTemples);
            //return; // If search term is present, prioritize it over dropdown filters
        }

        if (state) {
            filteredTemples = filteredTemples.filter((temple: any) =>
                temple.state === state
            );
        }

        if (deity) {
            filteredTemples = filteredTemples.filter((temple: any) =>
                temple.deity === deity
            );
        }

        onFilteredTemples(filteredTemples);
    }

  return (
    <section className='w-full h-full flex p-6'>
        <div className='w-full px-90 focus:px-0 relative'>
            <div className="absolute inset-y-0 text-white flex items-center ps-3 pointer-events-none">
             <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="search" className='block ps-9 rounded-full w-full h-full bg-accentColor p-4 outline-none border-0 text-white '
            placeholder='Search for famous temples ...' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); handleSearchFilter();}}
            />

        </div>
    </section>
  )
}

export default SearchBar