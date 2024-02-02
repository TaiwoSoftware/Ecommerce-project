import React from 'react'
import RoundedDiv from './RoundedDiv'
import SecondDiv from './SecondDiv'
import ThirdDiv from './ThirdDiv'

function StyledDiv() {
  return (
    <div className='mainHeader'>
        <RoundedDiv />
        <SecondDiv />
        <ThirdDiv />
    </div>
  )
}

export default StyledDiv