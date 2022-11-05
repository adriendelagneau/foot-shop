import Image from 'next/image';
import React from 'react';

const Tourniquet = () => {
    return (
        <div className="containerQ">
      
        <div className='boxQ'>
       
        <div style={{'--i':1}}><Image src="/erik-mclean-9c-MHu9fp6M-unsplash.jpg" alt='titi' width={300} height={300}  /></div>
        <div style={{'--i':2}}><Image src="/WallpaperDog-10799650.jpg" alt='titi' width={300} height={300}  /></div>
        <div style={{'--i':3}}><Image src="/cam-ferland-YS4vln2TCAE-unsplash.jpg" alt='titi' width={300} height={300}  /></div>
        <div style={{'--i':4}}><Image src="/paul-volkmer-updW-QUccFE-unsplash.jpg" alt='titi' width={300} height={300}  /></div>
        
      </div>
    </div>
    );
};

export default Tourniquet;