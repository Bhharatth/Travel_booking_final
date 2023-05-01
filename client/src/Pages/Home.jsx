import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Discover from '../components/Discover/Discover';
import Featured from '../components/Featured/Featured';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Popular from '../components/Popular/Popular';
import "./Home.css";
import Deals from '../components/Deals/Deals';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';

const Home = () => {
  return (
    <div className='home'>
       <Header/>
     <Featured/>
     <Discover/>
     <Popular/>
     <FeaturedProperties/>
     <Deals/>
     
     <Footer/>
    </div>
  )
}

export default Home