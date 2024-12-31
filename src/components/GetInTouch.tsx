import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white py-16">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouch;
