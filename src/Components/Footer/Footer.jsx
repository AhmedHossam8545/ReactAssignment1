import React from 'react'

export function Footer() {
  return <>
    <div className="  w-screen bg-gray-700 grid-cols-1  ">
        <div className="flex justify-between  p-16">
          <div className="left w-1/3 flex flex-col  justify-center items-center">
            <h1 className='mb-9 font-bold text-3xl'>LOCATION</h1>
            <p className='w-2/5 text-center'>2215 John Daniel Drive
            Clark, MO 65243</p>
          </div>

          <div className="middle w-1/3 flex flex-col justify-center items-center ">
            <h1 className='font-bold text-3xl'>AROUND THE WEB</h1>
            <ul className='mt-6 flex '>
              <li><i className=' mx-2 fa-brands fa-facebook-f border flex justify-center items-center border-white rounded-full  w-14 h-14 box-border  hover:text-black hover:bg-white duration-300 cursor-pointer'  ></i></li>
              <li><i className='mx-2 fa-brands fa-twitter border flex justify-center items-center border-white rounded-full  w-14 h-14 box-border  hover:text-black hover:bg-white duration-300 cursor-pointer'  ></i></li>
              <li><i className=' mx-2 fa-brands fa-linkedin-in border flex justify-center items-center border-white rounded-full w-14 h-14 box-border  hover:text-black hover:bg-white duration-300 cursor-pointer'  ></i></li>
              <li><i className='mx-2 fa-brands fa-youtube border flex justify-center items-center border-white rounded-full w-14 h-14 box-border  hover:text-black hover:bg-white duration-300 cursor-pointer'  ></i></li>

            </ul>
          </div>

          <div className="right w-1/3 flex flex-col justify-center items-center">
            <h1 className='mb-6 font-bold text-3xl'>ABOUT FREELANCER</h1>
            <p className='font-bold text-center text-lg'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
          </div>

        </div>
    </div>

    <div className='bg-gray-800 grid-cols-1 text-center w-screen p-6'>
      <h1>Copyright© Ahmed Hossam 2024</h1>

    </div>

  </>
}
