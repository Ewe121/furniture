import React from 'react'
import valencia from '../assets/valenciaModular.svg'
import remiStanding from '../assets/remiStanding.svg'
import play from '../assets/playaOutdoor.svg'
import floydSofa from '../assets/floydSofa.svg'

const ShopWN = () => {
  return (
    <div className="mx-[20px] md:mx-[25px] lg:mx-[100px]">
      <h1 className="text-2xl md:text-3xl font-bold mt-[60px] md:mt-[100px] mb-[32px] md:mb-[56px]">
        Shop what's new
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32px] text-[16px] md:text-[18px] font-medium">
        
        <div>
          <img src={valencia} alt="Valencia Modular"className='w-full' />
          <div className="text-start">
            <p className="pt-[20px]">Valencia Modular</p>
            <p className="pt-1 text-[#ED653B]">$2,999</p>
          </div>
        </div>

        <div>
          <img src={floydSofa} alt="The Floyd Sofa" className='w-full' />
          <div className="text-start">
            <p className="pt-[20px]">The Floyd sofa</p>
            <p className="pt-1 text-[#ED653B]">$1200</p>
          </div>
        </div>

        <div>
          <img src={play} alt="Playa Outdoor" className='w-full' />
          <div className="text-start">
            <p className="pt-[20px]">Playa Outdoor</p>
            <p className="pt-1 text-[#ED653B]">$1999</p>
          </div>
        </div>

        <div>
          <img src={remiStanding} alt="Remi Standing" className='w-full'/>
          <div className="text-start">
            <p className="pt-[20px]">Remi standing</p>
            <p className="pt-1 text-[#ED653B]">$2,999</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopWN
