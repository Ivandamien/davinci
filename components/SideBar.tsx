import React from 'react'
import NewChat from './NewChat'

function SideBar() {
  return (
      <div className='p-2 flex-col h-screen'>
         <div className="flex-1">
              <div>
                  {/*Newchat  */}
                    <NewChat/>
                  <div>
                    {/* ModelSelection */}
                  </div>

                  {/* Map through the chatRows */}
              </div>  
          </div> 
      </div>
  )
}

export default SideBar