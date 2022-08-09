import React from 'react'
import { Link } from 'react-router-dom'

function Start() {

  return (
    <>
      <h1>UI연습입니다</h1>
      <Link to='/carousel1'>AliceCarousel</Link>
      <br/>
      <Link to='/carousel2'>Slider</Link>
      <br/>
      <Link to='/modal'>Modal</Link>
    </>

  )
}

export default Start