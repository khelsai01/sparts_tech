import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-500 h-72 font-serif  flex justify-center items-center'>
          <div className=' w-[50%]'>
              <div className='text-center text-white mb-4'>
                  <h1 className='font-medium text-4xl' >Stay Updated</h1>
                  <p className='text-xl'>Get the latest updates on academics new you!</p>
              </div>
              <div className='flex justify-evenly w-[70%] m-auto '>
                  <input type='email' placeholder='E-mail' className='w-[70%] h-10 rounded-lg px-2 border-0' />
                
                  <button className='bg-blue-500 p-2 rounded-lg px-4 border-0 text-white' >Subscribe</button>
              </div>
      </div>
    </div>
  ) 
}

export default Footer
