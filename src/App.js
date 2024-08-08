import React from 'react'
import './style.css'
import Calendar from './class.componets'
import { Header,Content,Footer } from './func-componets'

export default function App(){
  return (
    <>
  <Header/>
  <Content/>
  <Footer/>
  <p><center><Calendar/></center></p>
  
  </>
  )
}