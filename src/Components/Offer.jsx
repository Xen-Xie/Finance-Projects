import React from 'react'

function Offer() {
    const OfferList = [
        {
            title: 'Cardano Debit-Cards',
            descripton: 'Cardano, simplified. The debit card that makes crypto spending easy.',
            icon: 'f.svg'

        },
        {
            title: 'On & Off Ramp',
            descripton: 'Fiat meets crypto, effortlessly buy, sell, and manage.',
            icon: 'f (1).svg'

        },
        {
            title: 'Solutions for business',
            descripton: 'Empowering businesses with effortless crypto payments and seamless fiat solutions.',
            icon: 'f (2).svg'

        }
        
    ]
  return (
    <>
        <section className='space-y-12'>
            <h2 className='font-bold leading-tight text-center text-2xl lg:text-3xl'>What do we offer?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    OfferList.map((item, index)=>(
                        <div key={index} className='flex gap-4'>
                            <div className='bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-xl w-4/5'>
                                <img src={item.icon} alt={item.title} className='w-9 h-9'/>
                            </div>
                            <div>
                                <h4 className='font-bold text-lg'>{item.title}</h4>
                                <p className='text-secondary text-sm'>{item.descripton}</p>
                            </div>

                        </div>
                    ))
                }

            </div>
        </section>
    </>
  )
}

export default Offer