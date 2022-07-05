import React from 'react'
import { Fade } from 'react-reveal'

// import components 
import TestimonialSlider from './TestimonialSlider'
const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className='container mx-auto'>
          <Fade bottom>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other people say</h2>
                <p className='subtitle'>
                    As i don't have testimonials yet, here are some motivational mottos of the best founders of famous technologies in the world.
                </p>
            </div>
            </Fade>
            <TestimonialSlider />
        </div>
    </section>
  )
}

export default Testimonials