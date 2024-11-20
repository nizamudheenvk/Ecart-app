import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/CartSilce'
const Cart = () => {

const dispatch = useDispatch()
   const navigate = useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }

  },[userCart])


  const handleDecrementProduct= (product)=>{
   if(product?.quantity>1){
    dispatch(decrementQuantity(product.id))
   }else{
    dispatch(removeCartItem(product.id))
   }
  }
  const checkout=()=>{
    dispatch(emptyCart())
    alert("Order confirmed ...Thankyou for purchasing with us")
    navigate("/")
  }
  return (
  <>
    <Header/>
    <div style={{paddingTop:"100px"}}>
     { 
     userCart?.length>0?
      <>
      <h1 className='text-5xl text-blue-600 font-bold'>Cart Summary</h1>
      <div className='grid grid-cols-3 gap-4 mt-3'>
        <div className='col-span-2 border rounded p-2 shadow ml-3'>
          <table className='table-auto w-full'>
            <thead>
           <tr>
           <td className='font-semibold'>#</td>
           <td className='font-semibold'>Name</td>
           <td className='font-semibold'>Image</td>
           <td className='font-semibold'>quantity</td>
           <td className='font-semibold'>price</td>
           <td className='font-semibold'>...</td>
           </tr>      
            </thead>
            <tbody>

             { 
             userCart?.map((product,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td><img width={'70px'} src={product?.thumbnail} alt="" /></td>
              <td>
                <div className='flex'>
                  <button onClick={()=>handleDecrementProduct(product)} className='font-semibold'>-</button>
                  <input style={{width:"40px"}} type="text" className='border rounded mx-1' value={product?.quantity} readOnly />
                  <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-semibold'>+</button>
                </div>
                </td>
              <td>$ {product?.totalPrice}</td>
              <td><button onClick={()=>dispatch(removeCartItem(product?.id))}><i className='fa-solid fa-trash text-red-600'></i></button></td>
              </tr> 
             ))
          }  
            </tbody>
          </table>
          <div className='float-right mt-5'>
            <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'> EMPTY CART</button>
           <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'> SHOP MORE</Link>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='border rounded shadow p-5'>
            <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
            <hr />
            <button onClick={checkout} className='w-full bg-green-600 text-white rounded p-2'>CHECK OUT</button>
          </div>
        </div>
      </div>
      </>
      :
      <div className="flex flex-col justify-center items-center">
  <img className='w-100 h-1/2' src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
  <h1 className='text-3xl text-red-600'>your Cart is empty</h1>
</div>

      }

    
    </div>
    </>
  )
}

export default Cart