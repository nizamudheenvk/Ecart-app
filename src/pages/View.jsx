import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCArt } from '../redux/slices/CartSilce'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispach = useDispatch()
  const userWishlist = useSelector(state=>state.wislistReducer)
  const [product,setproduc]=useState({})
  const {id} = useParams()
  // console.log(id);
  // console.log(product);

  
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allProducts.find(item=>item.id==id));
      setproduc(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist = ()=>{
    const exisitinProduct = userWishlist?.find(item=>item?.id==id)
    if(exisitinProduct){
      alert("product allredy in your whislist")

    }else{
      alert("product added to your wishlist")
      dispach(addToWishlist(product))

    }
  }
  const handCart = ()=>{
    dispach(addToCArt(product))
    const exisitingProduct = userCart?.find(item=>item?.id==id)
    if(exisitingProduct){
      alert("product quantity is incrementing in your cart")
    }else{
      alert("product added in your cart")
    }
  }
  return (
    <>
    <Header/>
    <div className='ms-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'350px'} height={'250px'} src={product?.thumbnail} alt="" />
        <div>

          
          <h3 className='text-bold'>PID : {product?.id}</h3>
          <h1 className='text-5xl font-bold'>{product?.title}</h1>
          <h4 className='text-bold text-red-600 text-2xl'>$ {product?.price}</h4>
          <h4>Brand : {product?.brand}</h4>
          <h4>Category : {product?.category}</h4>
          <p><span className='font-bold'>Description</span> : {product?.description}</p>
          <h3 className="font-bold">Clint reviews</h3>
          {
            product?.reviews?.length>0?
            product?.reviews?.map(item=>(
              <div key={item.date} className='shadow border rounded p-2 m-2'>
                <h5>
                  <span className='font-bold'>{item?.reviewerName}  </span> : <span>{item?.comment}</span>
                </h5>
                <p>Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-600"></i></p>
              </div>
            ))
            :
         <div className='font-bold text-red-600'>No reviews yet !!!</div>
          }

          <div className='flex justify-between mt-5'>
          <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>ADD TO WISHLIST </button>
        <button  onClick={handCart} className='bg-green-600 rounded text-white p-2 mr-9 '>ADD TO CART </button>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View