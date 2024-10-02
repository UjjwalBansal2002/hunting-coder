"use client";

import React, { useState } from "react";

const Contact = ({ params }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(response => response.text()).then(data => {console.log("Success",data)
      alert("Thanks for Contacting us")
    }).catch(err => console.error("error",err))

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-700 shadow-md rounded-lg p-8 w-96 mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border  bg-slate-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border  bg-slate-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border bg-slate-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 border bg-slate-900 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500  text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
