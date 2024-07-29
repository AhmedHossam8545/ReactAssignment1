export function About(){
    return <>
        <div className="bg-teal-500 h-screen mt-20 " >
            <div className=" header pt-20">
                <h1 className='  header text-5xl tracking-wide text-white font-bold flex justify-center items-center' >ABOUT</h1>
                <div className='dividor mt-4 flex justify-center items-center  ' >
                            <div className='h-1 w-20 bg-white' ></div>
                            <i className="fa-solid fa-star text-3xl   text-white mx-4   mb "></i>     
                            <div className='h-1 w-20 bg-white' ></div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-5 ">
                <div className=" flex justify-center items-center " >
                    <p className="w-1/2 text-2xl">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className=" flex justify-center items-center" >
                    <p className="w-1/2 text-2xl "  >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
        </div>
    </>
}