
import './App.css'


import CardContainer from './components/ContinueLearning/CardContainer'
import FeaturedCard from './components/Featured/FeaturedCard'
import FeaturedCardContainer from './components/Featured/FeaturedCardContainer'

import Navbar from './components/Navbar.jsx'
import Pickup from './components/Pickup'
import Recommend from './components/Recommend'
import Streak from './components/Streak'


function App() {
  

  return (
    <>
    <Navbar />
    <Streak />
    <Pickup />
    <CardContainer />
    <Recommend />
    <FeaturedCardContainer />
    </>
  )
}

export default App
