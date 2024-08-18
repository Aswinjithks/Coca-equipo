import React from 'react';
import './reviewBox.css'
import useRandomColorCombo from 'src/hooks/useRandomColorCombo';

interface ReviewBoxProps {
    text: string;
    userName: string;
    designation: string;
    imgSrc: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ text, userName, designation, imgSrc }) => {
    const { backgroundColor, textColor } = useRandomColorCombo();

    const boxStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
        padding: '32px',
        borderRadius: '20px'
    };

    return (
        <div className="box" style={boxStyle}>
            <span>{text}</span>
            <div className="user-info">
                <img className='image' src={imgSrc} alt={`${userName} profile`} />
                <div className="name">
                    <span className='user-name'>{userName}</span>
                    <span className='designation'>{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
