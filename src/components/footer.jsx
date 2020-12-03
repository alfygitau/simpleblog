import React from 'react'

function Footer() {
    return (
<div>
<footer>
  <div class="row" style={{marginLeft: '100px',marginRight: '100px'}}>
    <div class="col">
      <h1>SIMPLEBLOG</h1>
      <p>Our user experience ideals run through every vein of our company. Our ideals are not to 
        attain perfection, but rather to attain pleasure. Using our product should feel enjoyable - 
        like playing a game - it should be easy, exciting and uplifting. Something to try and 
        subsequently to learn from. This is the same experience our employees have working for us.</p>
    </div>
    <div class="col">
      <center><h1>PRODUCT</h1>
      <ul style={{listStyleType:'none'}}>
        <li>Features</li>
        <li>Gifts</li>
        <li>Certificates</li>
        <li>Pricing</li>
      </ul></center>
    </div>
    <div class="col">
      <center><h1>COMPANY</h1>
      <ul style={{listStyleType:'none'}}>
        <li>Team</li>
        <li>Nordic Growth Hackers</li>
        <li>Partnership</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul></center>
    </div>
    <div class="col">
      <center><h1>COMMUNITY</h1>
      <ul style={{listStyleType:'none'}}>
        <li>Community Service</li>
        <li>Our Blogs</li>
        <li>FAQ</li>
      </ul></center>
    </div>
  </div>
</footer>
</div>
    )
}

export default Footer
