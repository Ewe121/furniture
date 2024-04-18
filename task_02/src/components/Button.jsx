import React from 'react'


const Button = ({ name, icon }) => {

  return (
      <div>
          <button className='py-[12px] px-[48px] '> {name} {icon} </button>
    </div>
  )
}

export default Button