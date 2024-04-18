import React from 'react'
import { search } from '../assets'
import { Iconwrap } from '../assets'
import Button from './Button'
import './Header.css';
const Header = () => {
  return (
      <div className='text-center ' style={{background: '#F9F5FF'}}>
          <p className='font-medium text-violet-700 pt-[96px]'>Our Blog</p>
          <h1 className='font-semibold text-[48px]'>Resources and Insight</h1>
          <p style={{color: "#6941C6"}} className='"max-w-screen-sm max-w-[320px] mx-auto text-[20px] lg:max-w-full'>The latest industry news, interviews, technologies, and resources.</p>
          <div className='pb-[96px] pt-8'>    
           <div class="search-container mx-auto ">
            <input type="text" className="search-input" placeholder="Search..."/>
            <button type="submit" class="search-button">
                  <img src={search} alt="" />
            </button>
           </div>
          </div>
 
          
      </div>
  )
}

export default Header