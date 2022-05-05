import React from 'react';
import { useState, useEffect } from 'react';
import netflix from './image/netflix.png';
import profile from './image/profile-icon.jpg';
import './Nav.css';

function Nav() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true)
            }else{
                setShow(false)
            }
        });
        return ()=>{
            window.removeEventListener("scroll",window)
        }
    },[])

  return (
    <div className={`nav-bar ${show && 'nav-bar-scroll'}` }>
        <img className='netflix' src={netflix} alt='Netflix Logo'/>
        <img className='profile' src={profile} alt='profile icon'/>
    </div>
  )
}

export default Nav