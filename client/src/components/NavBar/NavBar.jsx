import "./NavBar.css";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCloudSun, faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import IconMenu from "../IconMenu/IconMenu";

const NavBar = () => {
  const [selectMenu,setSelectMenu ]= useState(false);
  return (
    <div className='navBar'>
        <div className="logo">
        <FontAwesomeIcon icon={faCloudSun} />
            Sun Travels
        </div>
        <div className="navControllers">
            <div className="login">
            <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="location">
                <FontAwesomeIcon icon={faEarthAfrica}/>
            </div>
            <div className="bars">
            <FontAwesomeIcon icon={faBars} onClick={()=>setSelectMenu(!selectMenu)}/>
            {selectMenu && (
              <IconMenu/>
            )}
            </div>
        </div>
    </div>
  )
}

export default NavBar