import React from 'react'

function Home() {
  return (
    <div className=''>


    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ height: "700px" }}>
        <div className="carousel-item active" >
          <img src="image1.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="image2.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="image3.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


    

    <div className='container  p-3 mb-3' style={{ textAlign: "center" }}>
      <h1>About Us<hr /></h1>
      <div className='row  p-3'>

        <div className='col-5 border p-5 mx-5' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
          Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
          Repellendus voluptates accusamus
          commodi, dolorem quibusdam iusto?
          Pariatur harum, illum impedit,
          quod omnis eos totam ducimus
          nesciunt voluptatem atque
          obcaecati assumenda quasi.
          Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
          Cumque, eligendi omnis veritatis,
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. nihil voluptatem inventore tempora officiis labore harum nam minima adipisci illo rem nulla corrupti. Explicabo consectetur distinctio minima.
        </div>
        <div className='col-5 border p-5' style={{ textAlign: "center", fontSize: "larger", backgroundColor: "white", fontWeight: "bolder", boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam debitis fugiat eos vel inventore corporis iste! Quos, culpa quas illum dignissimos sequi accusamus iure omnis? Adipisci odit maxime nihil?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eligendi dolorem. Quod commodi, fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci vel ratione ullam dolor, officia inventore doloribus nostrum, placeat cupiditate non animi iste quidem voluptatum numquam veniam possimus quibusdam consequatur!
        </div>

      </div>
    </div>

  </div>
  )
}

export default Home