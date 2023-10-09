import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedEvent = data.find((item) => item.id === parseInt(id));
        setItemDetails(selectedEvent);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center dark:bg-[#282a36]">
      <div className="container p-6 rounded-lg ">
        <div>
          <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                  <div className="font-bold text-3xl mb-4 text-white dark:text-[#f8f8f2]">{itemDetails.name}</div>
                  <div className="opacity-60 text-sm text-gray-700 dark:text-[#b8dcff] mb-4 ">
                  {itemDetails.description}
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={itemDetails.image}
            />
          </div>
        </div>
        <p className="text-gray-700 text-2xl dark:text-[#b8dcff] my-4 ">
          Price: {itemDetails.price}
        </p>
      </div>
    </div>
  );
};

export default Details;
