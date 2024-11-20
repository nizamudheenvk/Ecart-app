import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCArt } from '../redux/slices/CartSilce'

const Whishlists = () => {
  const userCart =useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wislistReducer)

  const handCart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCArt(product))
    const exisitingProduct = userCart?.find(item=>item?.id==productid)
    if(exisitingProduct){
      alert("product quantity is incrementing in your cart")
    }else{
      alert("product added in your cart")
    }
  }

  return (
    
    <>
    <Header/>
    <div style={{paddingTop:"100px"}} className='px-5'>
   {
    userWishlist?.length>0?
    <>
    <h1 className='text-4xl  font-bold text-red-600'>My Wishlist</h1>
    <div className='grid grid-cols-4 gap-4 mt-5'>
 {
     userWishlist?.map(product=>(
    <div key={product?.id} className='rounded border p-2 shadow'>
    <img width={"100%"} height={"200px"} src={product?.thumbnail} alt="" />
    <div className='text-center'>
      <h3 className='text-xl font-bold'>{product?.title}</h3>
      <div className='flex justify-evenly mt-3'>
      <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
      <button onClick={()=>handCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-500'></i></button>
      </div>
    </div>
  </div>
  ))
 }
  </div>
    </>
    :
<div className="flex flex-col justify-center items-center">
  <img className='w-100 h-1/2' src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
  <h1 className='text-3xl text-red-600'>your wishlist is empty</h1>
</div>
   }
    </div>


    </>
  )
}

export default Whishlists