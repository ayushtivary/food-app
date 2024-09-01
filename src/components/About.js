import React from 'react'
import { User } from './User'
import { UserClass } from './UserClass'

export const About = () => {
  const res = "ayush"
  return (
    <div>
        <h1>About Us</h1>
        <h2>Learning React</h2>
        <User name={res}/>
        <UserClass name={"AYUSH TIWARY CLASS"}/>
    </div>
  )
}