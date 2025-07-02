import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contactheader from './components/Contact-Header/contactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  return (
    <div>
      <Navigation />

     <main className='main-container'>
     <Contactheader />
     <ContactForm />
     </main>
    </div>
  )
}

export default App
