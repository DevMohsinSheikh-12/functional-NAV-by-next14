'use client'
import React from 'react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <section className='w-full flex-center flex-col font-bold mt-14'>
    <h1 className='text-center text-lg'>
    Developed by
      
      <br className='max-md:hidden '/>
      <span className='text-center text-lg text-sky-500 font-bold'>
       <p>Mohsin Sheikh</p></span>
      </h1>
      
      <div className='w-full flex justify-center mt-7 '>
   
<Link href={'https://www.linkedin.com/in/mohsin-sheikh-m-ajaz-11941b296'} passHref target="_blank" rel="noopener noreferrer" className='flex items-center pr-8'>
       <LinkedInLogoIcon className='text-blue-600 '/><span className='pl-2'>my linkedin</span>
</Link>
        
       
<Link href={'https://github.com/DevMohsinSheikh-12'} passHref target="_blank" rel="noopener noreferrer" className='flex items-center'>
       <GitHubLogoIcon/><span className='pl-2' >my GitHub</span>
</Link>
        

      </div>
</section>
  )
}

export default Footer