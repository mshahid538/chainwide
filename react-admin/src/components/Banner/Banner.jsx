import React from 'react'

function Banner() {
  return (
    <div style={{height: '200px'}}>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2020/01/05/17/46/technology-4743695_1280.jpg" className="d-block w-100" alt="..." height="200px"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/12/26/21/19/circle-3041437_1280.jpg" className="d-block w-100" alt="..." height="200px"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/05/10/12/41/hacker-2300772_1280.jpg" className="d-block w-100" alt="..." height="200px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner