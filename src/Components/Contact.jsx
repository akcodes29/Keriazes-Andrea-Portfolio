import React from 'react';

const Contact = () => {


  return (
    <div className="Contact">
      <div className='container my-5'>
        <h1>Let's Connect!</h1>
        <form action="https://formsubmit.co/andreak4774@proton.me" target='_blank' method='POST'>
          <div className="form-group">
            <div className="form-row">
              
              <input type="hidden" name='_next' value='https://andreak-portfolio.netlify.app/thankyou' />
              <div className="col">
                <input type="text" name='name' className="form-control" placeholder='Full Name' required />
              </div>
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder='Email' required />
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" rows="10" className="form-control" placeholder='Enter Your Message' required></textarea>
            </div>
          </div>
          <button type='submit' className="submit" >Send</button>
        </form>

      </div>
    </div>
  );
};

export default Contact
