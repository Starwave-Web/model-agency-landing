import { Button } from '../ui/button'
import { Crown } from 'lucide-react'


const Navbar = () => {
  return (
    <nav className='w-full min-h-[78px] sticky top-0 bg-transparent z-[100]'>
        <div className='container px-6 py-4 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <Crown className='h-[23px] w-[23px] md:h-[36px] md:w-[36px] text-[#D0B48C]'/>
                    <p className='primary-gradient-text text-[1.5rem] md:text-[2.5rem] font-semibold'>Ellux</p>
                </div>
                <ul className='text-white text-navigation flex gap-6'>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Services</li>
                    <li className='cursor-pointer'>Results</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <Button variant="default" >Apply Now</Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar