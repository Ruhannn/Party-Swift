const Home = () => {
  return (
    <>
      <section className="mx-auto px-4 lg:px-16">
        <div className="carousel relative overflow-hidden rounded-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/vwLLrRq/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash.jpg"
              className="w-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/sK3Fwf1/pexels-kindel-media-7148995.jpg"
              className="w-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/8bN62cK/kelsey-chance-t-AH2c-A-BL5g-unsplash.jpg"
              className="w-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/k45Q7Yq/dylan-sauerwein-ou-E5kfw-Zs4s-unsplash.jpg"
              className="w-full object-cover"
              alt="Slide 4"
            />
            <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
