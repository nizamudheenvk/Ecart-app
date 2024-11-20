import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispach = useDispatch()
  const userWhishlist = useSelector(state=>state.wislistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
<nav className='flex bg-yellow-600 fixed w-full p-5 text-white font-bold'>
    <Link to={'/'} className='text-2xl font-bold' ><i className='fa-solid fa-truck-fast me-2'></i>Daily Cart</Link>
    <ul className='flex-1 text-right'>
{
   insideHome && <li className='list-none inline-block ps-5'><input onChange={e=>dispach(searchProducts(e.target.value.toLowerCase()))} style={{width:"300px"}} className='rounded p-1 text-black' type="text"placeholder='search products here' /></li>

}        <li className='list-none inline-block ps-5'><Link to={'/Whishlists'}><i className='fa-solid fa-heart text-red-600'></i>whishlist <span className='bg-black text-white rounded p-1'>{userWhishlist?.length}</span></Link></li>
        <li className='list-none inline-block ps-5'><Link to={'/Cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>
    </ul>
    
</nav>  )
}

export default Header