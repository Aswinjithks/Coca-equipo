import React from 'react';
import AdvantageItem from './advantageItems';
import ReviewBox from './review';
import { advantages, reviews } from '@data/dummyDatas';
import './advantages.css';


const Advanteges: React.FC = () => {
    return (
        <div className='advcontainer'>
            <div className="features">
                <div className="info">
                    <h1>Ease in theHand</h1>
                    <p>Using our app in business, especially in the restaurant industry, has many advantages. Here are some of them:</p>
                </div>
                <div className="specialities">
                    <div className="left">
                        {advantages.map((adv, index) => (
                            <AdvantageItem key={index} title={adv.title} description={adv.description} />
                        ))}
                    </div>
                    <div className="right">
                        {advantages.map((adv, index) => (
                            <AdvantageItem key={index} title={adv.title} description={adv.description} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="review">
                {reviews.map((review, index) => (
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
    );
};

export default Advanteges;
