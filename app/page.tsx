import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-white px-2'>
      <h1 className='text-5xl font-bold mb-20'>Davinci code</h1>

      <div className='flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-2 text-center'>

      
      <div >
        <div className='flex flex-col items-center justify-center mb-5'>
        <SunIcon className="h-8 w-8"/>
         
          <h2>Examples</h2>
        </div> 
        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me to understand"</p>
          <p className='infoText'>"What is the difference between a dog and a cat"</p>
          <p className='infoText'>"What is the color of the sun"</p>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
        <BoltIcon className="h-8 w-8"/>
         
          <h2>Capabilities</h2>
        </div> 
        <div className='space-y-2'>
        <p className='infoText'>"Change the model to use"</p>
          <p className='infoText'>"Messages are stored in our database"</p>
          <p className='infoText'>"Toast Notification when chatGpt is thinking"</p>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
        <ExclamationTriangleIcon className="h-8 w-8"/>
         
          <h2>Limitation</h2>
        </div> 
        <div className='space-y-2'>
          <p className='infoText'>"May generate incorrect information"</p>
          <p className='infoText'>"May produce harmful instructions or biased content"</p>
          <p className='infoText'>"Limited knowlegde of world and events after 2021"</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage