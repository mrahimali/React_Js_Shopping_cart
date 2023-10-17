import React, { useEffect, useState } from 'react'

const CartList = ({cart}) => {

    const [CART, SetCART]=useState([]);
    useEffect(()=>{
        SetCART(cart);
    },[cart]);

  return (
    <div>
        <table id="customers">
            <tr>
                <th className='img_head'>Image</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        {
            CART?.map((cartItem, cartIndex)=>{
                return (
                    <tr>


                        <td className='des_img'><img src={cartItem.Img} width={50}/></td>
                        <td>{cartItem.name}</td>
                        <td>
                        {
                            cartItem.quantity <= 0?<button className='btn'>0</button>:<button className='btn' onClick={()=>{
                                const _CART= CART.map((item,index)=>{
                                    return cartIndex === index ? {...item, quantity: item.quantity-1} :item
                                })
                                SetCART(_CART)
                            }}>-</button>
                        }
                        <span>{cartItem.quantity}</span>
                        <button className='btn' onClick={()=>{
                            const _CART= CART.map((item,index)=>{
                                return cartIndex === index ? {...item, quantity: item.quantity+1} :item
                            })
                            SetCART(_CART)
                        }}>+</button>
                        </td>
                        <td className='price'><span>Rs. {cartItem.price*cartItem.quantity} /-</span></td>
                        
                    </tr>
                )
            })
        }
        </table>
        <p className='payable'>
            Total Payable Ammount :-&nbsp;&nbsp; 
            {
                CART.map(item=> item.price*item.quantity).reduce((total,curValue)=>total+curValue,0)
            }&nbsp;/-
        </p>
    </div>
  )
}

export default CartList