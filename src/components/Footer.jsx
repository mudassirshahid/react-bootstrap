import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     
<footer className="page-footer font-small blue">

 
  <div className="footer-copyright text-center py-3 text-white">© 2023 Copyright:
    <Link className='text-white' to="/"> AppCo</Link>
  </div>
 

</footer>

    </>
  )
}

export default Footer
