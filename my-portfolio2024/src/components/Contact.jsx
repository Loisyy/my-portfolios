import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#001f3f] flex flex-col justify-start items-center p-8 " // Changed justify-center to justify-start
    >
      <form
        method="POST"
        action="https://getform.io/f/8b5f4c9b-125d-4cd3-96e4-3f1b860cac23"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ae045e] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            || Submit the form below or reach me through email - Nkeiru Lois
          </p>
        </div>
        <input
          className="bg-[#fbf1fa] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#fbf1fa]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#fbf1fa] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 hover:bg-[#cb629a] hover:border-[#cb629a] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
