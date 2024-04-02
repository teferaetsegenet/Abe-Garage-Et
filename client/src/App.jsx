import React from 'react'
import './App.css'
import Header from './markup/components/Header/Header'
import BottomBanner from './markup/components/BottomBanner/BottomBanner'
import Footer from './markup/components/Footer/Footer'

// Import the css file
import "./assets/templete_asstes/css/bootstrap.css"
import "./assets/templete_asstes/css/style.css"
import "./assets/templete_asstes/css/responsive.css"
import "./assets/templete_asstes/css/color.css"

function App() {

  return (
    <>
      <Header />
      <BottomBanner />
      <Footer />
    </>
  )
}

export default App;
