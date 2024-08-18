import React from 'react'
import './home.css'
import shape from '@assets/svg/shapes.svg'
import arrow from '@assets/svg/arrow.svg'
import BarChart from './barChart'
import InfoCard from './infoCard'
import HomeReview from './homeReview'
import stats from '@assets/svg/stats.svg'
import ReviewBox from '../advanteges/review'
import { review, reviews } from '@data/dummyDatas'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="section1">
                <div className="home-details">
                    <span>All the features you need in one App for any kind of <br /> your business 🚀</span>
                    <h1>Manage your restaurant business so advanced</h1>
                    <button className='getStarted'>Get Started for Free <img src={arrow} alt="" /></button>
                </div>
                <img className='shapes' src={shape} alt="" />
            </div>
            <div className="section2">
                <div className="graph">
                    <div className="stats">
                        <div className="stats-icon">
                            <img src={stats} alt="" />
                        </div>
                        <span>Sales Statistics</span>
                    </div>
                    <BarChart />
                </div>
                <div className="ratings">
                    <div className="home-info">
                        <InfoCard />
                        <InfoCard />
                    </div>
                    <div className="home-review">
                        {review.map((review, index) => (
                            <ReviewBox
                                key={index}
                                text={review.text}
                                userName={review.userName}
                                designation={review.designation}
                                imgSrc={review.imgSrc}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
