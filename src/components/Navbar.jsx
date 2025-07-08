import React from 'react'

import {navLinks} from '../../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    })

    navTween.fromTo('nav', 
      {backgroundColor: 'transparent'},
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut'
      }
    )
  })

  return (
    <>
      <nav>
        <div>
          <a href="#home" className='flex items-center gap-2'>
            <img src="/images/logo.png" alt="logo" />
            <p>Madrinks poa</p>
          </a>

          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <FloatingWhatsApp
        phoneNumber='+254759693618'
        accountName='Madrinks Poa'
        avatar='/images/logo.png'
        chatMessage='Hello, how can we be of help?'
        placeholder='Type something...'
        darkMode = {true}
        notification='true'
      />
    </>
  )
}

export default Navbar