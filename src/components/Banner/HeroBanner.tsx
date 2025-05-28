import React from 'react'
import herobanner from '@/assets/hero.png'

const HeroBanner = () => {
  return (
    <div className='bg-black text-white px-6 ps-12'>
        <div className="flex  items-center justify-between">
            <div className="flex flex-col items-start gap-4">
                <div className="logo flex items-center">

                </div>
                <h3 className='text-6xl'>Up to 10% off Voucher</h3>
                <button>Shop Now</button>
            </div>
            <div className="image">
                <img src={herobanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroBanner