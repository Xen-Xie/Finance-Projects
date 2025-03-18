import React from 'react'
const listA = ["Investors","Features","Book a demo","Security"];
const listB = ["Credits Cards","Gift Cards","Savings accounts","NFT"];
const listC = ["Free rewards","Documentation","Affiliate program"];
const listD = ["Changelog","License","Site Maps","News"];

const linkList = (title, list) => (
  <div className='space-y-4 min-w-fit'>
    <h2 className='font-bold'>{title}</h2>
    <ul className='space-y-2'>
        {list.map((item,index)=><li key={index} className='text-secondary text-sm'>{item}</li>)}
    </ul>
  </div>
)

function Footer() {
  return (
    <footer className='bg-[#292834]/25 mt-[120px]'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-2.5 lg:gap-8 py-12 px-2.5 md:px-10 lg:px-20 xl:px-24 w-full max-w-[1440px] mx-auto'>
            <div className='space-y-2 col-span-2'>
              <div className='flex gap-x-3'>
                <img src="Exclude.svg" alt="" className='w-7 h-7'/>
                <h4 className='font-bold text-lg'>Wern Finance</h4>
              </div>
              
                <p className='text-secondary text-sm max-w-[287px]'>Discover the power of our secure and rewarding credit cards</p>
            </div>

        
        {linkList('About Us',listA)}
        {linkList('Products',listB)}
        {linkList('Useful Links',listC)}
        {linkList('Social',listD)}
      </div>

    </footer>
  )
}

export default Footer