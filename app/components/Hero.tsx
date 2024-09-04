import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='px-5 md:px-24 py-5'>
        <div>
            <p className='font-bold md:font-extrabold text-2xl md:text-6xl text-center'>The largest B2B pharmaceutical products marketplace</p>
        </div>
        <div className='py-5 md:py-24'>
            <SearchBar />
        </div>
    </div>
  )
}

export default Hero