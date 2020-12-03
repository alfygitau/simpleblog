import React from 'react'
import img6 from '../assets/six.png'
import img7 from '../assets/tilt.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

function SecondBody() {
    return (
  <div><div>
  <center><h1 style={{marginTop: '50px',marginBottom: '50px',textDecoration: 'underline'}}>WHY SIMPLEBLOGS</h1></center>
</div>
<div class="row">
  <div class="col">
    <img src={img6} style={{width: '600px',height: '400px',marginLeft: '40px'}} alt="..."/>
  </div>
  <div class="col">
    <p style={{marginLeft: '40px',marginRight: '40px'}}>At SimpleSite we believe it's important to offer people of all technological levels the ability 
      to tap into the web's endless potential. Our solution isn't made for professional web developers; 
      it’s made for anybody with a desire to have their own little corner of the internet. 
      No designers, developers, or webmasters necessary.</p>
      <p style={{marginLeft: '40px',marginRight: '40px'}}>Best of all, you can have your own website online within minutes!</p>
      <p style={{marginLeft: '40px',marginRight: '40px'}}>Simply choose the type of website you'd like to have, customize its look with our guided design wizard,
      then fill in the information needed to make it yours. Make your own website today!</p>
      <br/>
      <button class="button1" style={{marginLeft: '250px'}}>START HERE</button>
  </div>
</div>
<div class="row rowx">
  <div class="col-sm-6">
    <strong><h1 style={{marginLeft: '50px'}}>MOBILE READY</h1></strong>
    <h3 style={{marginLeft: '50px',textDecoration: 'underline'}}>EDIT ON-THE-GO</h3>
    <br/>
    <p style={{marginLeft: '50px',marginRight: '40px'}}>
      What makes SimpleSite stand out is that we are the only website builder that fully 
      supports mobile-friendly editing in a mobile browser - no special app needed! 
      This means you can view and edit your website on your smartphone.</p>
    <p style={{marginLeft: '40px',marginRight: '40px'}}>SimpleSite automatically gives you a website that looks stunning on both desktop and mobile. 
      On top of that we also have a full mobile-optimized interface that gives you the freedom to 
      access and edit everything on mobile devices. Edit the design and content of your website from 
      the comfort of your couch or on the go - it’s all possible with SimpleSite’s mobile website editor.</p>
      <br/>
      <br/>
      <center><button class="button1">START HERE</button></center>
  </div>
  <div class="col-sm-6">
    <img src={img7} style={{width: '600px',height: '500px',marginRight: '40px'}} alt="..."/>
  </div>
</div>
<div>
<h1 style={{textAlign: 'center',textDecoration: 'underline'}}>FEATURES</h1>
<br/>
<p style={{textAlign: 'center',marginBottom: '50px'}}>
  Check out all the great features that are included on your website. SimpleSite provides everything you need 
  to create a beautiful and professional website.</p>
</div>
<div class="row" style={{marginLeft: '40px',marginRight: '40px'}}>
  <div class="col">
    <center><img src={icon1} style={{width:'75px',height: '75px'}} alt="..."/></center>
    <center><h3>Mobile Optimized</h3></center>
    <center><p>All SimpleSite websites are 100% mobile-friendly, ensuring your website visitors 
      have a great mobile experience when they visit your website.</p></center>
  </div>
  <div class="col">
    <center><img src={icon2} style={{width:'75px',height: '75px'}} alt="..."/></center>
    <center><h3>Stuning Themes</h3></center>
    <center><p>A SimpleSite website lets you choose between hundreds of unique designs. 
      Choose between our themes or go with a 
      ready-made design.</p></center>
  </div>
  <div class="col">
    <center><img src={icon3} style={{width:'75px',height: '75px'}} alt="..."/></center>
    <center><h3>Guided Step by Step</h3></center>
    <center><p>We will guide you every step of the way, empowering you to grow your business online. 
      Whether you want to open a 
    restaurant, or start a daycare, we have the resources for you!</p></center>
  </div>
  <div class="col">
    <center><img src={icon4} style={{width:'75px',height: '75px'}} alt="..."/></center>
    <center><h3>Customer Support</h3></center>
    <center><p>Our customer service is ready to help you when you have questions. You can also 
      check out our frequently 
      asked questions in our customer service section.</p></center>
  </div>
</div>
<br/>
<br/></div>
    )
}
export default SecondBody
