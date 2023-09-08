import React from 'react'

const BgImage = ({ backgroundImage }) => {
    const divStyle = {
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '700px',
        width: '100%',
      };
    
  return (
    <div className='background-img' style={divStyle}>
      {/* Your content goes here */}
    </div>
  )
}

export default BgImage
