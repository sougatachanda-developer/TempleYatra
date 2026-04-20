import React from 'react'

function SearchBar() {
  return (
    <section className='w-full h-full flex p-6'>
        <div className='w-full px-90 focus:px-0 relative'>
            <div className="absolute inset-y-0 text-white flex items-center ps-3 pointer-events-none">
             <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="search" className='block ps-9 rounded-full w-full h-full bg-[#8E0000] p-4 outline-none border-0 text-white '
            placeholder='Search for famous temples ...'
            />

        </div>
    </section>
  )
}

export default SearchBar