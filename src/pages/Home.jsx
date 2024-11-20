import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,errorMsg);

  const [currentPage,setCurrentPaage] =useState(1)
  const ProductsPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/ProductsPerPage)
  const CurruntPageProductLastIndex = currentPage*ProductsPerPage
  const CurruntPageProductfirstIndex = CurruntPageProductLastIndex-ProductsPerPage
  const visibleAllProducts = allProducts?.slice(CurruntPageProductfirstIndex,CurruntPageProductLastIndex)
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  const navigateNextPage = ()=>{
    if(currentPage!=totalPage){
      setCurrentPaage(currentPage+1)
    }
  }
  const navigatePrevPage =()=>{
    if(currentPage!=1){
setCurrentPaage(currentPage-1)
    }
  }

 
  return (
    <>
 <Header insideHome={true}/>
<div style={{paddingTop:"100px"}} className='container px-4 mx-auto'>
 {
  loading?
  <div className='flex justify-center items-center my-5 text-lg'>
    <img width={"70px"} height={"70px"} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
   Loading....
  </div>
  :
  <>
 <div className='grid grid-cols-4 gap-4'>
   {
    allProducts?.length>0 ?
    visibleAllProducts?.map(products=>(
      <div key={products?.id} className='rounded border p-2 shadow'>
      <img width={"100%"} height={"200px"} src={products?.thumbnail} />
      <div className='text-center'>
        <h3 className='text-xl font-bold'>{products?.title}</h3>
        <Link to={`/${products?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
      </div>
    </div>
 
    ))
   :
   <div className='flext jusify-center items-center font-bold text-red-600 my-5 text-lg'>
    Products not found
   </div>
   }
  </div>
<div className="text-2xl text-center font-bold mt-20">

  <span onClick={navigatePrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-2'></i></span>
  <span> {currentPage} of {totalPage}</span>
  <span onClick={navigateNextPage} className='cursor-pointer'><i className='fa-solid fa-forward me-2'></i></span>

</div>


  </>
}
  </div>   
 </>

  )
}

export default Home