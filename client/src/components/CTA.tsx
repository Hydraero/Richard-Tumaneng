import React from 'react'
import ContactForm from './ContactForm'
type Props = {}

const CTA = (props: Props) => {
  return (
    <div>
      <section id='contact' className="font-robotomono dark:text-primary text-center h-screen">
        <div className="pt-32 pb-20 text-4xl ">
          <h1 className="flex mx-3 md:mx-4 text-gray-500 dark:text-primary justify-center">Contact Me</h1>
        </div>
        <div className="flex flex-col items-center container">
          <form action="https://formsubmit.co/ren.tumaneng@gmail.com" method="POST"  className="rounded overflow-hidden">
            <div>
              <input type="text" name="name" placeholder="Your Full Name" className="w-1/2 bg-slate-100 dark:bg-slate-900 rounded border border-gray-300 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
              <input type="email" name="email" placeholder="Your Email" className="w-1/2 bg-slate-100 dark:bg-slate-900 rounded border border-gray-300 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" required></input>
            </div>
            <textarea name="message" placeholder="Your Message" className="w-full bg-gray-100 dark:bg-slate-900 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            <div><button type="submit" className="rounded-full my-8 py-2 px-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-300 ">Send</button></div>
            
          </form>
        </div>
        
        
      </section>
    </div>
  )
}

export default CTA