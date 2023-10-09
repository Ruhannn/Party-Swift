import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const defaultOptions = {
  max: 10,
  perspective: 1000,
  scale: 1,
  speed: 100,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const ServicesSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response=await fetch("/data.json");
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
          className="tilt-container shadow-lg border dark:border-[#bd93f972] rounded p-4 mb-4 md:mb-8 lg:mb-8 relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover object-top mb-4"
          />
          <h2 className="text-xl dark:text-[#f8f8f2] font-semibold mb-2">
            {item.name}
          </h2>
          <p className="text-gray-700 dark:text-[#b8dcff] mb-2">
            Price: {item.price}
          </p>
          <p className="text-gray-600 dark:text-[#f2f2ead2]">
            {item.description}
          </p>
          <div className="my-5">
            <hr className="border-t-1 dark:border-[#bd93f972] my-4" />
            <Link
              to={`/Details/${item.id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded absolute bottom-2 md:bottom-4 lg:bottom-4 right-2 md:right-4 lg:right-4 hover:bg-blue-600 transition duration-300">
              Learn More
            </Link>
          </div>
        </Tilt>
      ))}
    </>
  );
};

export default ServicesSection;
