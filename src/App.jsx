import { useState } from 'react'
import HeaderR from "./sections/HeaderR.jsx";
import './App.css'
import ProductR from "./sections/ProductR.jsx";
import ChoiceR from "./sections/ChoiceR.jsx";
import GiftR from "./sections/GiftR.jsx";
import SocialMedida from "./sections/SocialMedida.jsx";
import NewsletterR from "./sections/NewsletterR.jsx";
import FooterR from "./sections/FooterR.jsx";

function App() {


  return (
  <div className='max-w-[1920px]'>
   <HeaderR/>
      <ProductR/>
      <ChoiceR/>
      <GiftR/>
      <SocialMedida/>
      <NewsletterR/>
      <FooterR/>
  </div>
  )
}

export default App
