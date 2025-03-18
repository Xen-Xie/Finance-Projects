import { image } from '@heroui/theme'
import React from 'react'
import quot from '../assets/quot.svg'

function FeedBack() {
    const FeedBack = [
        {
            id: 1,
            name: 'Hadid Khan',
            username: 'UIUX Designer',
            message: "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",
            image:'Ellipse.svg'
        },
        {
            id: 2,
            name: 'Wade Warren',
            username: 'Web Designer',
            message: "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",
            image:'Ellipse (1).svg'
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            username: 'Trust Administrator',
            message: "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",
            image:'Ellipse (2).svg'
        },
    ]

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            FeedBack.map((item, index) => (
                <div key={index} className='bg-[#27322f]/25 rounded-2xl px-6 py-14 space-y-8'>
                    <div className='bg-[#3d3f54]  flex justify-center items-center h-14 w-14 rounded-full'>
                        <img src={quot} alt="" className='w-1/2'/>
                    </div>
                    <p>
                        &quot;{item.message}&quot;
                    </p>
                    <div className='flex gap-2 items-center'>
                        <img src={item.image} alt="" className='w-12 h-12 rounded-full'/>

                        <div>
                            <h5 className='font-bold'>{item.name}</h5>
                            <p className='text-secondary text-sm'>{item.username}</p>
                        </div>
                            
                        
                    </div>
                    
                </div>
            ))
        }
    </section>
  )
}

export default FeedBack