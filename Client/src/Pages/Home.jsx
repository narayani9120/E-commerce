import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
        <div className='home_image'>
          <img src="back_g.jpg"></img>
          </div>
         <div className='tag'>
         <p>Flaunt your <span>unique style</span> with our diverse dress collection</p>
         </div>
         <Footer/>
      </div>
   
  )
}

export default Home
