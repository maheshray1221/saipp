import AboutDemo from '@/components/about/demo'
import FAQSection from '@/components/about/Faq'
import NewsletterSection from '@/components/blog/NewsletterSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-50 min-h-screen relative z-10'>
      
      <AboutDemo/>
      <NewsletterSection/>
      <WhyChooseUs/>
      <FAQSection/>
    </div>
  
  )
}
