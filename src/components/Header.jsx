import React from 'react'
import NetflixLogo from './NetflixLogo'
import Button from './Button'


const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        {/* Netflix Logo */}
        <div className='w-1/6 min-w-20 max-w-40 cursor-pointer'>
          <NetflixLogo />
        </div>
        <div>
          {/* Buttons for Sign in and Up */}
          <Button buttonText={'Sign In'} variant={'transparent'}/>
          <Button buttonText={'Sign Up'} variant={'red'}/>
          
        </div>
    </header>
  )
}

export default Header