import React from 'react'

export  function Portfolio() {

  function openv2(e){
    console.log("zereebooooo");
    // console.log(e.target.nextElementSibling.children[0].getAttribute("src"));
    // console.log(e.target);
    // console.log(document.querySelector(".dialog-main1").childNodes);
    let image = e.target.nextElementSibling.getAttribute("src");
    let title = e.target.nextElementSibling.getAttribute("alt");
    document.querySelector(".dialog-img img").setAttribute("src" , image)
    document.querySelector(".dialog-content h3").innerHTML = title;
    document.querySelector(".dialog-main1").classList.remove("hidden"); 
  }


  function closeD(e){
    let target = e.target.parentNode.parentNode.parentNode.parentNode;
    target.classList.add("hidden");
    console.log("close done");
  }
  return (
    <>
      <div className="container overflow-hidden flex justify-center items-center flex-col mb-10 mx-auto mt-36 ">
        <div className="header">
          <h1 className="header text-5xl tracking-wide text-gray-700 font-bold flex justify-center items-center uppercase">
            PORTFOLIO
          </h1>
          <div className="dividor mt-4 flex justify-center items-center  ">
            <div className="h-1 w-32 bg-gray-700"></div>
            <i className="fa-solid fa-star text-3xl   text-gray-700 mx-4   mb "></i>
            <div className="h-1 w-32 bg-gray-700"></div>
          </div>
        </div>
        <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4">
          <div onClick={openv2} className=" item1 max-w-sm  rounded-lg  ">
            <div className="item-img hover:opacity-50  duration-300 relative cursor-pointer rounded-lg  my-1 mx-auto flex justify-center items-center ">
              <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="	https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png"
                alt="LOG CABIN  "
              />
            </div>
          </div>

          <div onClick={openv2} className=" item2 max-w-sm  rounded-lg hover:opacity-50  duration-300 relative cursor-pointer ">

            <div className="item-img cursor-pointer my-1 mx-auto flex justify-center items-center  duration-500 relative">
            <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="https://hamza-noah.github.io/Start-React-App/static/media/cake.6554473016d32b343f02.png"
                alt="TASTY CAKE"
              />
            </div>
          </div>

          <div onClick={openv2} className=" item3 max-w-sm  rounded-lg hover:opacity-50  duration-300 relative cursor-pointer ">

            <div className="item-img cursor-pointer my-1 mx-auto flex justify-center items-center  duration-500 relative">
            <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="	https://hamza-noah.github.io/Start-React-App/static/media/circus.494a4a914b5471b41f3e.png"
                alt="CIRCUS TENT  "
              />
            </div>
          </div>

          <div onClick={openv2} className=" item4 max-w-sm  rounded-lg hover:opacity-50  duration-300 relative cursor-pointer ">
           
            <div className="item-img cursor-pointer my-1 mx-auto flex justify-center items-center  duration-500 relative">
            <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="	https://hamza-noah.github.io/Start-React-App/static/media/game.a940b57aa7bab2eacc52.png"
                alt="CONTROLLER"
              />
            </div>
          </div>

          <div onClick={openv2} className=" item5 max-w-sm  rounded-lg hover:opacity-50  duration-300 relative cursor-pointer ">

            <div className="item-img cursor-pointer my-1 mx-auto flex justify-center items-center  duration-500 relative">
            <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="	https://hamza-noah.github.io/Start-React-App/static/media/safe.01792c0bdc342bf4bf9c.png"
                alt="LOCKED SAFE"
              />
            </div>
          </div>

          <div onClick={openv2} className=" item6 max-w-sm  rounded-lg hover:opacity-50  duration-300 relative cursor-pointer ">

            <div className="item-img cursor-pointer my-1 mx-auto flex justify-center items-center  duration-500 relative">
            <div className="hover-div flex justify-center items-center rounded-lg absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0 bg-teal-700 opacity-0 hover:opacity-70 transition duration-300">
                {/* <h2 class="text-center text-black text-2xl  mt-10">Hover Content</h2> */}
                <i onClick={openv2} className="fa-solid text-white fa-plus  font-bold text-6xl"></i>
              </div>
              <img
                className="rounded-lg w-full h-full mx-auto "
                src="	https://hamza-noah.github.io/Start-React-App/static/media/submarine.48c9704ca7f8ce901038.png"
                alt="SUBMARINE"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" dialog-main1 hidden  absolute z-50 w-full h-full top-0 left-0 right-0 bottom-0  bg-custom  flex justify-center items-center   overflow-x-hidden overflow-y-hidden ">
        <div className="dialog rounded-3xl w-1/2  flex justify-center items-center     bg-white">
          <div className="dialog-content relative shadow-md py-5 ">
            <h3 className="text-5xl tracking-wide font-bold text-center mb-4 mt-5 text-black ">
              LOG CABIN
            </h3>
            <div className="dividor flex justify-center items-center  ">
              <div className="h-1 w-32 bg-gray-700"></div>
              <i className="fa-solid fa-star text-3xl   text-gray-700 mx-6 mb "></i>
              <div className="h-1 w-32 bg-gray-700"></div>
            </div>
            <button onClick={closeD} title="hamada" className="absolute top-1 end-1  m-3 border-0">
              <i className="fa-solid fa-xmark text-black text-xl"></i>
            </button>
            <div className="dialog-body relative  ">
              <div className="container flex justify-center items-center flex-col p-5 ">
                <figure className="my-5 dialog-img">
                  <img
                    className=" w-2/3 mx-auto border rounded-3xl"
                    src="	https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png"
                    alt=""
                  />
                </figure>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia neque assumenda ipsam nihil, molestias magnam,
                  recusandae quos quis inventore quisquam velit asperiores,
                  vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                  Nam.
                </p>
              </div>
            </div>
            <div className="dialog-bottom flex justify-center items-center border-t-0 ">
              <button
                onClick={closeD}
                title="hamada "
                className="bg-transparent py-2 px-3 border-0 text-black "
              >
                <span className="font-bold text-black ">X</span> Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
