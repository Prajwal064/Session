import React from 'react'
import Card from './components/Card'
const App = () => {
  const cardData = {
    username: "prajwal",
    role: "Software Engineer",
    email:"prajal@gmail.com",
    profile:"https://unsplash.com/photos/selective-focus-photography-of-man-wearing-nike-dad-hat-hh3ViD0r0Rc",
  }
  return (
    <div >
      <Card cardData={cardData}/>
    </div>
  )
}

export default App
