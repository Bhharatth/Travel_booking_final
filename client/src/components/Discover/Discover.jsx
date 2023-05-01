import React from 'react';
import "./Discover.css";

const Discover = () => {
  return (
        <div className="dicoverContainer">
            <img className='discoverImg' src='https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <div className="discoverDetails">
                <span>Save Your Next Stay</span>
                <button>Discover a deal</button>
            </div>
        </div>
  )
}

export default Discover