import React from 'react';
import "./Deals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Deals = () => {
  return (
    <div className='deals'>
        <span className='dealsRowTitle'>Book cheap flights, hotels and car hire with Sun Travels  <FontAwesomeIcon icon={faChevronDown} /></span>
        <span className='dealsRow'>Join 100 million savvy travellers as you compare flights, hotels and cars from hundreds of providers. Here’s how  <FontAwesomeIcon icon={faChevronDown} /></span>
        <span className='dealsRow'>Our international sites  <FontAwesomeIcon icon={faChevronDown} /></span>
     </div>
  )
}

export default Deals