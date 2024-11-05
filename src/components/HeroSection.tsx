import heroImage from '../assets/hero-image.jpeg'

const HeroSection = () => {
    return (
        <section className='relative h-screen bg-[url("assets/ranges.png")]  bg-repeat bg-[length:100px_100px]'>
            <div className='flex z-0 absolute inset-0 bg-gradient-to-r from-[#BD1F17] via-[#A61D13] to-[#8E1B0F] items-center justify-center opacity-90 '>


            </div>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-[60%] md:top-1/4 w-full px-5 opacity-100 z-10 absolute ">
                <div className='text-left flex flex-col '>
                    <h1 className="text-5xl font-bold font-bebas-neue">
                        TASTE THE AUTHENTIC <br /> SAUDI CUISINE
                    </h1>
                    <span className='text-white'>Among the best Saudi chefs in the world, serving you something beyond flavor.</span>
                    <a href='#menu' className='bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition w-fit px-4 py-2'>Explore Menu</a>
                </div>
                <div className='h-full md:w-[50%] opacity-100 z-10'>
                    <picture>
                        <img
                            src={heroImage}
                            alt="Saudi cuisine hero image"
                            className='w-full h-full object-cover scale-x-[-1] opacity-100'
                            loading="eager"
                            

                        />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default HeroSection