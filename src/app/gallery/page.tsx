"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import { EventGallery } from "@/types/Gallery";
import Image from "next/image";

const Gallery = () => {
  const [content, setContent] = useState<EventGallery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("gallery").select("*");

      if (error) {
        console.error("Error fetching data:", error);
        return;
      }

      setContent(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container overflow-x-hidden mx-auto px-4 py-10 md:py-20 text-white">
        <h1 className="text-5xl font-bold mt-10 mb-10 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Event Gallery
        </h1>
        {content.map((event) => (
          <div key={event.id} className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-blue-400">
                {event.event_name}
              </h2>
              <div className="flex items-center text-gray-400">
                <FaCalendarAlt className="mr-2" />
                <span>{event.event_date}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {event.images?.map((image, i) => (
                <div
                  key={i}
                  className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={image || "/Aegis.jpeg"}
                      width={600}
                      height={600}
                      alt={event.event_name}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BackgroundLayout>
  );
};

export default Gallery;
