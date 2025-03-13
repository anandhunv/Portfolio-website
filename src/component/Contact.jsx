import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../assets/contact.png";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Your Name Here", // Change this to your name
    message: "",
    from_email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      toast.success("Message sent successfully!", { position: "top-right" });
  
      setFormData({ from_name: "", to_name: "Your Name Here", message: "", from_email: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.", { position: "top-right" });
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-white px-6" id="contact">
    <div className=" w-full flex flex-col md:flex-row items-center  shadow-lg rounded-lg overflow-hidden">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={contact} // Replace with your image URL
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="text-gray-400 text-center mb-6">
          Feel free to reach out for any inquiries or collaborations!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="   Your Name"
              required
            />
            {/* <label className="absolute top-3 left-3 text-gray-400 text-sm transition-all transform scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:text-blue-400">
              Your Name
            </label> */}
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Your Email"
              required
            />
            {/* <label className="absolute top-3 left-3 text-gray-400 text-sm transition-all transform scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:text-blue-400">
              Your Email
            </label> */}
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-32 bg-black text-white rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Your Message "
              required
            ></textarea>
            {/* <label className="absolute top-3 left-3 text-gray-400 text-sm transition-all transform scale-100 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:text-blue-400">
              Your Message
            </label> */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>

    {/* Toast Notifications */}
    <ToastContainer />
  </div>
  );
};

export default ContactForm;
