import React from 'react'
import "./infocard.css"
import medal from "@assets/svg/medal.svg"
import star from '@assets/svg/star.svg'


const InfoCard = () => {
  return (
    <div className='info-card'>
      <div className="top">
        <div className="info-review">
          <div className="medal">
            <img src={medal} alt="" />
          </div>
          <span>Rating Review</span>
        </div>
        <span>Reviews of some of our app restaurant industry companies.</span>
      </div>
      <div className="bottom">
        <img src={star} alt="" />
        <h1>4.9</h1>
      </div>
    </div>
  )
}

export default InfoCard
