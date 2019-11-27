import React, { Component } from 'react'
import mail from '../img/mail.png'

export default class Contact extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="cont-div fcc fr w-100 ">
            <p className="cont">إتصل بنا</p>
            <span class="seperate"></span>
          </div>

          <div class="container-contact1">
<div class="contact1-pic js-tilt dd" data-tilt="" >
<img src={mail} alt="IMG" />
</div>
<form class="contact1-form validate-form">

<div class="wrap-input1 validate-input" data-validate="Name is required">
<input class="input1" type="text" name="name" placeholder="Name" />
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input class="input1" type="text" name="email" placeholder="Email" />
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Subject is required">
<input class="input1" type="text" name="subject" placeholder="Subject" />
<span class="shadow-input1"></span>
</div>
<div class="wrap-input1 validate-input" data-validate="Message is required">
<textarea class="input1" name="message" placeholder="Message"></textarea>
<span class="shadow-input1"></span>
</div>
<div class="container-contact1-form-btn">
<button class="contact1-form-btn">
<span>
Send Email
<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</span>
</button>
</div>
</form>
</div>
        </div>
        
      </div>
    )
  }
}
