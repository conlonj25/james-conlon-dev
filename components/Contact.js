import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='bg-slate-500 '>

      <div className='text-center text-3xl font-medium text-white mb-5'>
        Contact MdContactMail
      </div>

      <div className='flex justify-center'>
        <div className='w-4/5 flex flex-row'>

          <div className='w-3/5 h-auto flex-grow'>
            <iframe width="100%" height="100%" title="map" src="https://www.google.com/maps/embed/v1/place?q=Barcelona,+Spain&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
          </div>

          <div className='flex-grow'>

            <p className='text-3xl font-medium text-white m-10'>Get in touch</p>

            <form action="/action_page.php" id="usrform" className='m-10'>

              <label for="name" className='text-sm text-white'>Name</label><br />
              <input type="text" name="name" className='w-full bg-slate-600 rounded border border-white focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-300 ease-in-out'/><br />

              <label for="email" className='text-sm text-white'>Email</label><br />
              <input type="text" name="email" className='w-full bg-slate-600 rounded border border-white focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-300 ease-in-out'/><br />

              <label for="message" className='text-sm text-white'>Message</label><br />
              <textarea rows="4" cols="50" name="message" form="usrform" className='w-full bg-slate-600 rounded border border-white focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-300 ease-in-out'/><br />

              <input type="submit" value="Submit" className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mt-2"/>
            </form> 
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact
