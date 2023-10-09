import { toast } from "react-toastify";
import Reviews from "../Reviews/Reviews";
import ServicesSection from "../ServicesSection/ServicesSection";
import Team from "../Team/Team";
import CountdownTimer from "../Timer/Timer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="mx-auto dark:bg-[#282a36] px-4 lg:px-16">
        <div className="carousel mt-10 lg:h-[720px] relative overflow-hidden rounded-lg">
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
        <h1
          className="text-center font-extrabold text-5xl my-8 text-blue-500"
          data-aos="fade-up">
          Our service
        </h1>
        <div
          className=" gap-8 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up">
          <ServicesSection></ServicesSection>
        </div>
        <div  data-aos="fade-up">
          <Team></Team>
        </div>
        <div data-aos="fade-down">
          <CountdownTimer></CountdownTimer>
        </div>
        <div className="flex justify-around" data-aos="fade-right">
          <img
            className="h-[626px] sticky top-0 hidden lg:block"
            src="https://cdn.discordapp.com/attachments/1151870132549865536/1160922550197555272/kamilike.png"
            alt="Satisfied Girl"
          />
          <Reviews />
        </div>
        <div></div>
      </section>
    </>
  );
};
export default Home;
