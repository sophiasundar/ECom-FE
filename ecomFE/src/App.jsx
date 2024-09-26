import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar'
import SearchBar from './components/searchbar';
import Electronics from './components/electronics';
import HomeAppliance from './components/homeappliance';
import HomeFurniture from './components/homefurniture';
import MenCosmetics from './components/mencosmetics';
import WomenCosmetics from './components/womencosmetics';
import MenClothing from './components/mencloth';
import WomenClothing from './components/womencloth';
import Footer from './components/footer';
import Contact from './components/contact';


const App =() =>{

  const [electronicsData, setElectronicsData ] = useState([])


  return (
    
    <div>
     
     <Router>

       <NavBar/>

       <Routes>

        {/* <Route exact path='/' element={<Home/>} /> */}

        <Route path='/electronics' element={<Electronics  electronicsData={electronicsData} setElectronicsData={setElectronicsData}  />} />
       
        {/* <Route exact path='/homeappliance' element={<HomeAppliance/>} />

        <Route exact path='/homefurniture' element={<HomeFurniture/>} />

        <Route exact path='/mencosmetics' element={<MenCosmetics/>} />

        <Route exact path='/womencosmetics' element={<WomenCosmetics/>} />

        <Route exact path='/mencloth' element={<MenClothing/>} />

        <Route exact path='/womencloth' element={<WomenClothing/>} /> */}

       

      

       

       

       
 
       </Routes>

     </Router>
      {/* <main>
        
        <div id='/electronics'>
        <Electronics/>
        </div>
        <div id='homeappliance'>
          <HomeAppliance/>
        </div>
        <div id='homefurniture'>
          <HomeFurniture/>
        </div>
        <div id='mencosmetics'>
          <MenCosmetics/>
        </div>
        <div id='womencosmetics'>
          <WomenCosmetics/>
        </div>
        <div id='mencloth'>
          <MenClothing/>
        </div>
        <div id='womencloth'>
          <WomenClothing/>
        </div>
        
      </main>
       */}
      <Contact/>
      <Footer/>
      
    </div>
    
  )
}

export default App
