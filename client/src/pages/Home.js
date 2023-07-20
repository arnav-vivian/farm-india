import React from 'react'
import FarmerPage from '../components/Farmerpage';
import ChangeScene from '../components/ChangeScene';
import PreHeader from '../components/preheader';
import FarmerHome from '../components/FarmerHome';
import Header from '../components/Header';
//import GoogleTranslate from '../language/GoogleTranslate';
function Home() {
  return (
    <div>
      <div className="containers">
        <PreHeader />
        <Header />
        <FarmerPage />
        <ChangeScene />
      </div>
    </div>
  )
}

export default Home