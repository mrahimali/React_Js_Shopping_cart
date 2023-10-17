import React from 'react'

const Header = ({count,handleShow}) => {
  return (
    <div className='flex shopping-card'>
        <div onClick={()=> handleShow(false)}>My Shopping Cart </div>
        <div onClick={()=> handleShow(true)}>Cart
            <sup>{count}</sup>
        </div>
    </div>
  )
}

export default Header