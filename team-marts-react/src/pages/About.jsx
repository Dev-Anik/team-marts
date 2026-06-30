import React from 'react'
import Hero from '../components/Hero'
import CompanyDetails from '../components/About/CompanyDetails'
import Vision from '../components/About/Vision'
import Service from '../components/Service'

const About = () => {
  return (
    <>
      <Hero title="About Us" heading1="A leading TEXTILE" heading2="SOLUTIONS PROVIDER"/>
      <CompanyDetails/>
      <Vision/>
      <Service/>
    </>
  )
}

export default About