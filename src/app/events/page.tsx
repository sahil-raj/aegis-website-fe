"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import { Event } from "@/types/Event";
import Image from "next/image";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        console.error(error);
      } else {
        setEvents(data || []);
      }
    };
    console.log(events, supabase);
    fetchData();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const currentDate = new Date();

      const past = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate < currentDate;
      });

      const upcoming = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= currentDate;
      });

      setPastEvents(past);
      setUpcomingEvents(upcoming);
    }
  }, [events]);

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container overflow-x-hidden mx-auto px-4 mt-10 py-10 md:py-20 text-white">
        <h1 className="text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Explore Our Events
        </h1>
        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
                >
                  <Image
                    src={event.image || "/Aegis.jpeg"}
                    alt={event.name}
                    height={200}
                    width={700}
                    className="rounded-lg max-w-full max-h-80 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-400 mb-2">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-8 mt-16 text-center md:text-left">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
                >
                  <Image
                    src={event.image || "/Aegis.jpeg"}
                    alt={event.name}
                    height={200}
                    width={700}
                    className="rounded-lg max-w-full max-h-80 mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-400 mb-2">{event.date}</p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </BackgroundLayout>
  );
};

export default Events;
