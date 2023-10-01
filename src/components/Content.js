import React from 'react'
import Card from './Card'
import Footer from './Footer'
import contentStyle from '../css/content.module.css'

const Content = () => {
  return (
    <div className={contentStyle.overall}>
        <Card />
    </div>
  )
}

export default Content