import React from "react";
import office from "../assets/office.svg";
import bedroom from "../assets/bedroom.svg";
import livingRoom from "../assets/livingRoom.svg";
import dining from "../assets/dinning.svg";

const BrowseByRoom = () => {
  const rooms = [
    { name: "Office", image: office },
    { name: "Bedroom", image: bedroom },
    { name: "Living Room", image: livingRoom },
    { name: "Dining room", image: dining },
  ];

  return (
    <section className="px-6 md:px-8 lg:px-[100px] ">
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-bold px-2 text-gray-900 mb-8  pt-[80px] pb-[48px]">
        Browse by room
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="p-4 flex items-center justify-between">
              <span className="text-lg font-medium text-gray-800">
                {room.name}
              </span>
              <span className="text-gray-500">&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByRoom;
