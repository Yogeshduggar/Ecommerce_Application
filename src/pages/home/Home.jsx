import Slider from '../Slider/Slider'
import React from 'react'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import { Categories } from '../Categories/Categories'
import { Contact } from '../Contact/Contact'

export  const Home = () => {
  return (
    <div className="home">
     <Slider/>
   <FeatureProducts type="Featured" />
   <Categories/>
   <FeatureProducts type="Trending" />
   <Contact/>
    </div>
  )
}
