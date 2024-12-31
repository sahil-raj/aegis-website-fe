import React from "react";
import "../globals.css"
import Navbar from "@/components/Navbar";

let content = [{ "id": 1, "event_date": "31-12-2024", "images": ["", "", "","","","","","",""], "title": "title" }, { "id": 2, "event_date": "31-12-2024", "images": ["", "", ""], "title": "title"  }, { "id": 3, "event_date": "31-12-2024", "images": ["", "", ""], "title": "title"  }]

const Gallery = () => {
  return (
    <>
    <Navbar/>
      <main className="max-w-7xl mx-auto p-6">
        {content.map((event) => {
          return (
            <div key={event["id"]}>
              <h1 className="text-white text-4xl text-center mb-5 mt-10">{event["title"]}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <!-- Card --> */}
                {event["images"].map((image,i) => {
                  return (
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-gray-900 text-white-800" key={i}>
                      <img
                        src={image}
                        alt="Gallery Item"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </main>
    </>
  );
};

export default Gallery;
