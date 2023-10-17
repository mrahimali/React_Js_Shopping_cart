import React from 'react'

const ProductList = ({product, addToCart}) => {
  return (
    <div className='flex'>
        {
            product.map((productsItem, productIndex)=>{
                return(
                    <div className='product' >
                        <div className='product-item'>
                            <div className='img'>
                                <img src={productsItem.Img} />
                            </div>
                            <p>{productsItem.name} | {productsItem.Category}</p>
                            <p className='comp'>{productsItem.seller}</p>
                            <p className='price'>Rs. {productsItem.price}/-</p>
                            <button className='addToCart' onClick={()=> addToCart(productsItem)}>Add To Cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList