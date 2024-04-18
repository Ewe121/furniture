import React from 'react'
import { cards } from '../constants'
import { Alec, Candice, CollabImg, CustomerImg, Demi, DesignImg, DeveloperImg, Drew, Iconwrap, Lana, ManageImg, ModelImg, Natali, Olivia, Orlando, Phoneix, ProductImg, search, selmg, WireframeImg } from "../assets"
const Card = (img, label, title, icon, content, imgProfile, profileName, date) => {
  return (
    <div className='grid grid-cols-12 gy-4 px-[16px] lg:px-[112px] gap-[32px]'>
          
      {cards.map(cardi =>
          
          <div className='card col-span-12 p-5 shadow-lg flex flex-col justify-around  lg:col-span-4 '>
            <img src={cardi.img} alt="" />
          <h1 className='pt-[32px] pb-[12px] font-medium' style={{ color: '#6941C6' }}>{cardi.label}</h1>
            <div className='flex flex-start items-center gap-3'>
              <h1 className='font-semibold text-[24px] w-[296px]'>{cardi.title }</h1>
              <img src={Iconwrap} alt="" className='pl-6' />
            </div>
            <h1 className='md:max-w-[720px]  lg:w-[336px]   font-normal text-[18px] pt-[14px]' style={{ color: '#667085' }}>{cardi.content}</h1>

            <div className="profile flex gap-3 pt-[64px]">
              <img src={cardi.imgProfile} alt="" />
              <div>
                <h1 className='font-medium'>{cardi.profileName}</h1>
                <p style={{ color: '#667085' }}>{cardi.date}</p>
              </div>
            </div>
          </div>  
        )}
    
      </div>
  )
}


export default Card