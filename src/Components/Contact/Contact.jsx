import React from 'react'

export  function Contact() {
  return <>

    <div className="container mt-10 h-screen mx-auto flex flex-col justify-center items-center">
        <div className='header' > 
          <h1 className='header text-5xl tracking-wide text-gray-700 font-bold flex justify-center items-center uppercase' >contact me
          </h1>
            <div className='dividor mt-4 flex justify-center items-center  ' >
              <div className='h-1 w-32 bg-gray-700' ></div>
              <i className="fa-solid fa-star text-3xl   text-gray-700 mx-4   mb "></i>     
              <div className='h-1 w-32 bg-gray-700' ></div>
            </div>
        </div>
      <div className='container grid-cols-1  '>

        <div class="w-1/2 mt-2  mx-auto  rounded-md shadow-sm">
          <input type="text" name="price" id="price" class="block w-full rounded-md border-0 my-6  pl-7 pr-20 text-gray-900    placeholder:text-gray-400 placeholder:text-3xl   sm:text-sm sm:leading-6" placeholder="Name"/>
          <input type="email" name="email" id="email" class="block w-full rounded-md border-0 my-6 pl-7 pr-20 text-gray-900    placeholder:text-gray-400 placeholder:text-3xl   sm:text-sm sm:leading-6" placeholder="Email Address"/>
          <input type="text" name="phone" id="phone" class="block w-full rounded-md border-0 my-6 pl-7 pr-20 text-gray-900    placeholder:text-gray-400 placeholder:text-3xl   sm:text-sm sm:leading-6" placeholder="Phone Number"/>
          <input type="text" name="message" id="message" class="block w-full rounded-md border-0 my-6 pl-7 pr-20 text-gray-900    placeholder:text-gray-400 placeholder:text-3xl   sm:text-sm sm:leading-6" placeholder="Message"/>
          <button className='bg-teal-500 py-4 rounded-xl px-10 text-xl mt-20 ms-5 hover:bg-teal-600 duration-500'  >send</button>
        </div>
      </div>

    </div>

  </>
    
  
}
