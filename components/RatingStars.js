import Image from 'next/image';
import React from 'react';

const RatingStars = ({num, size}) => {
   
    const newArray = []

    for(let i = 0; i < num; i++){
        newArray.push("stars")
    }


    return (
        <div className='flex'>
            {
                newArray.map((s,i) => (
                    <div key={i} className={size === "large" ? "starLarge": "starSmall"}>
                        <Image src={"/star(3).png"} alt="star" width={40} height={40} />
                    </div>
                ))
            }
        </div>
    );
};

export default RatingStars;