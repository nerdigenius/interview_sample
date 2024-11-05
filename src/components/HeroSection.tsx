import heroImage from '../assets/hero-image.jpeg'

const HeroSection = () => {
    return (
        <section className='relative flex h-screen bg-[url("assets/ranges.png")] justify-center items-end lg:items-center  bg-repeat bg-[length:100px_100px] pb-8'>
            <div className='flex z-0 absolute inset-0 bg-gradient-to-r from-[#BD1F17] via-[#A61D13] to-[#8E1B0F] items-center justify-center opacity-90 '>


            </div>
            <div className="flex flex-col lg:flex-row h-[70%] items-center justify-center w-full lg:h-[60%]  lg:w-[65%] px-5 opacity-100 z-10 ">
                <div className='text-left flex flex-col lg:w-[40%] justify-around h-[70%]'>
                    <h1 className="text-5xl lg:text-7xl lg:w-fit font-bebas-neue lg:-mr-[50%] z-20 text-white lg:bg-[#bd1f1771] lg:pr-8 lg:pt-4">
                        TASTE THE AUTHENTIC <br /> SAUDI CUISINE
                    </h1>
                    <span className='text-white font-roboto text-xl '>Among the best Saudi chefs in the world, serving you something beyond flavor.</span>
                    <a href='#menu' className='bg-yellow-500 text-black  text-[18px] font-bold leading-[24px] text-center hover:bg-yellow-400 transition w-fit h-[56px] px-6 py-4 gap-2'>EXPLORE MENU</a>
                </div>
                <div className='h-[50%] lg:h-full lg:w-[60%] opacity-100 mt-20 lg:mt-0'>
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