import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import "./advantageItem.css"

interface AdvantageItemProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, description, icon }) => {
    return (
        <div className="item">
            <div className="icon">
                <IoSettingsSharp />
            </div>
            <div className="more">
                <h3>{title}</h3>
                <span className='text'>{description}</span>
            </div>
        </div>
    );
};

export default AdvantageItem;
