import React from 'react'
import { userContext } from './Context'
import Header2 from './context-header2'
import Content2 from './context-content2'
export default function App(){
  let [user,setUser]=React.useState('')
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}