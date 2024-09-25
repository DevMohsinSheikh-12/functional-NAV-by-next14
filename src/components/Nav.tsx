import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <section>
        <nav className='flex justify-between p-6 bg-slate-500 font-bold text-lg border-b-2 w-full'>
            <div className="ml-0 md:ml-28 mb-4 md:mb-0">
            {/* flex justify-between p-6 bg-slate-500 font-bold text-lg
            border-b-2 */}
            <Link href={'/'} className='pr-11 hover:text-xl hidden md:block'>
                Logo
                </Link>
            </div>

            <ul className='flex items-center'>
                <Link href={'/'}>
                <li className='pr-11  hover:text-xl'>Home</li>
                </Link>
                <Link href={'/about'}>
                <li className='pr-11 hover:text-xl'>About</li>
                </Link>
                <Link href={'/contact'}>
                <li className='pr-11 hover:text-xl'>Contact Us</li>
                </Link>
                <Link href={'/apply'}>
                <li className='pr-11 hover:text-xl '>Apply Now</li>
                </Link>
                
            </ul>
        </nav>
    </section>
  )
}

export default Nav