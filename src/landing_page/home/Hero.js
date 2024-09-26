import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div classname="row text-center">
                <img src="images/homeHero.png" alt="Hero Image" className="mb-5" style={{width:"100%"}} />
                <center>
                <h1 className="mt-5">Investing Everything</h1>
                <p>Online Platform to invest in stocks , derivates,mutual funds,and more</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%" , margin:"0 auto",alignContent:"center"}}>SignUp Now</button>
                </center>
            
            </div>
        </div>
     );
}

export default Hero;