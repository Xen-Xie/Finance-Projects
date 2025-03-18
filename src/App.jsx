import './App.css'
import DabitCard from './Components/DabitCard'
import Faq from './Components/FaQ'
import FeedBack from './Components/FeedBack'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import NavbarArea from './Components/Navbar'
import Offer from './Components/Offer'
import PerfectCard from './Components/PerfectCard'
import Vision from './Components/Vision'

function App() {

  return (
    <>
    <main className='overflow-x-hidden'>
      <NavbarArea />
      <div className='w-full max-w-[1400px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5'>
        <div className='space-y-[10px] lg:space-y-[150px]'>
          <Hero />
          <Vision />
          <Offer />
          <DabitCard />
          <PerfectCard />
          <FeedBack />
          <Faq />
          
        </div>
      </div>
      <Footer />
      
    </main>
      
    </>
  )
}

export default App
