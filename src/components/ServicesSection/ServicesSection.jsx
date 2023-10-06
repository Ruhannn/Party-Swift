import { useState, useEffect } from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
	max:            10,  
	perspective:    1000,   
	scale:          1,   
	speed:          100,   
	transition:     true,  
	axis:           null,   
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",   
}
const ServicesSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("public/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <Tilt
          key={item.name}
          options={defaultOptions}
          className="shadow-lg border rounded p-4 mb-4 md:mb-8 lg:mb-8 relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto object-cover object-top mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-700 mb-2">Price: {item.price}</p>
          <p className="text-gray-600">{item.description}</p>
          <hr className="my-4" />
          <button className="bg-blue-500 text-white py-2 px-4 rounded absolute bottom-2 md:bottom-4 lg:bottom-4 right-2 md:right-4 lg:right-4 hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </Tilt>
      ))}
    </>
  );
};
export default ServicesSection;
