import React from 'react'
import FarmerPage from '../components/Farmerpage';
import ChangeScene from '../components/ChangeScene';
import PreHeader from '../components/preheader';
// import FarmerHome from '../components/FarmerHome';
import GridGallery from '../components/GridGallery';
import { NavbarSimple } from '../components/Header';
//import Circle from '../components/Circle';
//import GoogleTranslate from '../language/GoogleTranslate';
function Home() {
  return (
    <div>
      <div className="containers">
        <PreHeader />
        <NavbarSimple />
        <FarmerPage />
        <GridGallery />
        <ChangeScene />
      </div>
    </div>
  )
}

export default Home