import React from 'react';
import "./ShimmerCard.css";
const ShimmerCard = () => {
  return (
    <div className='shimmer-card'>
        <div className='shimmer-image shimmer'> </div>
        <div className='shimmer-info'>
            <div className='shimmer-line shimmer'>  </div>
            <div className='shimmer-line shimmer'>  </div>
            <div className='shimmer-line shimmer'>  </div>
        </div>
    </div>
  )
}

export default ShimmerCard;