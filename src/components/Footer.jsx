import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div style={{display:"flex", justifyContent:"space-between" ,height:"350px" }} className=' bg-violet-600  text-white mt-5 '>
    <div className='ml-5 mt-5'>
      <i className='fa-solid fa-truck-fast  text-white'><span className='ml-5'>E cart</span></i>
      <p style={{textAlign:"justify"}}>designed and build with all the love in the world by <br/>the luminar team with  the help of our <br /> contributers <br /> code licenced luminar,docs CC BY 3.0. <br /> curruntly v5.3.2.</p>
    </div>
    <div className='mt-5'>
      <h1>Links</h1>
      <ul>
     <li>Landing page</li>
      <li>Home page</li>
      <li>Cart page</li>
      <li>whishlist</li>
      </ul>
      </div>
      <div className='mt-5'>
        <h3>Guides</h3>
        <ul>
        <li>react</li>
        <li>Tailwind css</li>
        <li>React Router Dom</li>
        </ul>
      </div>
      <div className='mt-6'>
        <h1 className='text-3xl'>contact us</h1>
        <input  style={{marginRight:"20px"}} type="text" className='text-black rounded mt-4 ' placeholder='Enter you Email here' />
      </div>
   </div> 
  )
}

export default Footer