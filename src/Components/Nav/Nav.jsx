// export function Nav(){
//     return <>
//         <nav className="bg-gray-700 flex justify-around	p-6  fixed top-0 left-0 right-0" >
//             <a href="" className="text-white text-3xl font-bold tracking-wider p-4 ">START REACT</a>
//             <div className="flex justify-between ms-96 	">
//                 <a href="" className="mx-4 text-lg font-bold  rounded-xl flex justify-center items-center p-4 bg-teal-500 hover:text-teal-500 duration-300 " >PORTFOLIO</a>
//                 <a href="" className="mx-4 text-lg font-bold flex justify-center items-center p-4  hover:text-teal-500 duration-300">ABOUT</a>
//                 <a href="" className="mx-4 text-lg font-bold flex justify-center items-center p-4   hover:text-teal-500 duration-300 ">CONTACT</a>

//             </div>
//         </nav>
//     </>
// }

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { name: 'PORTFOLIO', href: '#', current: true },
  { name: 'ABOUT', href: '#', current: false },
  { name: 'CONTACT', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export  function Nav() {
  return (
    <Disclosure as="nav" className=" fixed top-0 left-0 right-0 z-50 bg-gray-700 p-6">
      <div className="mx-auto  max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lgnos:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className=" nav-linkss flex flex-1 items-center justify-center sm:items-stretch lgnos:justify-start">
            <div className="flex flex-shrink-0 items-center">
            <Link to={"/ReactAssignment1"} className="text-white text-3xl font-bold tracking-wider p-4 me-28 ">START REACT</Link>

            </div>
            <div className="hidden lgnos:ml-6 lgnos:block">
              <div className="flex space-x-4">
                {/* {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                       'mx-4 text-lg font-bold flex justify-center items-center p-4   hover:text-teal-500 duration-300',
                    )}
                  >
                    {item.name}
                  </a>
                ))} */
                  <div className="flex justify-between ms-96 	">
                  <NavLink to={"/ReactAssignment1/portfolio"} className="mx-4 text-lg font-bold   flex justify-center items-center p-4  " >PORTFOLIO</NavLink>
                  <NavLink to={"/ReactAssignment1/about"} className="mx-4 text-lg font-bold flex justify-center items-center p-4  ">ABOUT</NavLink>
                  <NavLink to={"/ReactAssignment1/contact"} className="mx-4 text-lg font-bold flex justify-center items-center p-4   ">CONTACT</NavLink>
                  </div>
                }
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <DisclosurePanel className="lgnos:hidden  ">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
