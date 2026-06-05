import React from 'react'

const Card = (props) => {

  return (
    <div class='card'>
      <div className="upper">
        <img src="bidisha.png" alt="" />
      </div>
      <div className="lower">
        <h1>{props.cardData.username}</h1>
        <h4>{props.cardData.role}</h4>
        <h5>{props.cardData.email}</h5>
      </div>
    </div>
  )
}

export default Card
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Prajwal064/Session.git
git push -u origin main
