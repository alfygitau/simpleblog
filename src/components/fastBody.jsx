import React from 'react'
import img1 from '../assets/fst.png'
import img2 from '../assets/scd.png'
import img3 from '../assets/trd.png'
import img4 from '../assets/fth.png'
import img5 from '../assets/fif.png'

function FastBody() {
    return (
<div>
<div class="row2">
  <h2 style={{textAlign: 'center',marginTop: '20px',textDecoration: 'underline'}}>THEMES</h2>
  <p style={{textAlign: 'center',marginLeft: '50px',marginRight: '50px',marginBottom: '80px'}}>
    Pick a theme that fits the kind of website YOU want to make.
     We’ve made sure there are plenty of beautiful templates to choose from. Really, 
     there’s something for everyone! Each template can be completely customized, 
     so let your imagination run free.</p>
</div>
<center>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img1} class="d-block img-fluid" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img2} class="d-block img-fluid" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img3} class="d-block img-fluid" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img4} class="d-block img-fluid" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img4} class="d-block img-fluid" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img5} class="d-block img-fluid" alt="..."/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  </center>
</div>
    )
}

export default FastBody
