'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'> 
            <h1 className='hero__title'>
                Rent a car - real quick and easy!
            </h1>  
            <p className="hero__subtitle">
                Streamline your car rental experience with an effortless booking
                process.
            </p>
            <CustomButton 
                title= "Explore Cars"
                containerStyles= "bg-primary-blue text-white rounded-full mt-10"
                handleClick= {handleScroll}
            />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/car-146185_1280.png" alt="hero" fill className="object-contain" />
            </div>

            <div className="hero__image-overlay" />
        </div>
        
    </div>
    )
}

export default Hero
