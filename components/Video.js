import React from 'react';


const Video = () => {
    return (
        <div >
            <video autoPlay loop muted className="w-[100vw] h-screen object-cover relative -z-30">
              <source src='https://res.cloudinary.com/dos8mey8r/video/upload/v1661955132/shoes/basketVideo_AdobeExpress_xkcnzr.mp4' type='video/mp4' />
            </video>
            <div className="flex justify-center items-center absolute flex-col w-100 bottom-40 left-6 text-7xl font-bold lg:text-8xl xl:text-9xl">
                <div className="choose">CHOOSE</div>
                <div className="choose2"> YOUR</div>
                <div className="choose">STYLE</div>
            </div>
        </div>
    );
};

export default Video;