import Slider from '../Slider/Slider'
import React from 'react'
import FeatureProducts from '../FeatureProducts/FeatureProducts'

export  const Home = () => {
  return (
    <div className="home">
     <Slider/>
   <FeatureProducts type="Featured" />
   <FeatureProducts type="Trending" />
    </div>
  )
}
