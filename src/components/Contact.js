import React from 'react'

const Contact = () => {
  return (
    <section id="Contact" className="container">
    <h3 className="text-center">Contact Me</h3>
    <p className="text-center">Interested in working together? We should queue up a chat. 
      I’ll buy the coffee. 😊😊😊</p>
    <div className="row">
      
      <div className="col-lg-6">
        <form action="">
          <label for="Name">Full-Name*</label>
          <input type="text" name="name" placeholder="Enter your Full Name" />

          <label for="mail">Email*</label>
          <input type="email" name="mail" placeholder="Enter your Correct Email" />


          <label for="Message">Message*</label>
          <textarea name="message" id="" cols="30" rows="7" placeholder=""></textarea>
          

          <input type="submit" value="Send" />
        </form>
      </div>

      <div className="col-lg-6 text-center">
        <img src="confavv.png" alt="Contact" className="img-fluid img-responsive" />
      </div>
    </div>
  </section>

  )
}

export default Contact