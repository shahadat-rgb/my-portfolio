import React from 'react';
import emailjs from 'emailjs-com';
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
const ContackUs = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_bc06jen', e.target, 'user_r5ele89Hq9YDCa8EeylGB')
          .then((result) => {
              if (result) {
                  alert('email conferm successfully')
              }
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
       <div  style={{backgroundColor:'#24273E'}}>
           <HeaderNavbar></HeaderNavbar>
          <div className="container">
          <div>
             <h2 style={{color:'#ff4a57',paddingTop:'80px',marginBottom:'30PX',textAlign:'center'}}>Contact Us</h2>
              <section className='d-flex justify-content-center'>
              <section className='col-12 col-sm-6 col-md-7 mb-3'> 
              <form onSubmit={sendEmail}> 
                       <h2 className='text-center text-white pb-3'>Get To Touch</h2>
                       <div className="form-group">
                           <input type="text" className="form-control" name='name' required placeholder="your name *"/>
                       </div>
                       <div className="form-group">
                           <input type="email" className="form-control" name='email' required placeholder="your email address"/>
                       </div>
                       <div className="form-group">
                           <textarea name="massage" className="form-control" cols="20" rows="5" required placeholder="your Message"></textarea>
                       </div>
                       <div className="form-group">
                               <input type="submit" className="send-btn"  value ='Send Meassage'/>
                     </div>
                   </form>
              </section>
              </section>
                    <h5 className="text-center text-white pb-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>shahadat hossain</span></h5>
        </div>
          </div>
       </div>
    );
};

export default ContackUs;