import React, { useState } from "react";
import "./contactform.scss";
import "./projects.scss";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form Data Submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className=" test rounded-lg p-10 max-w-lg mx-auto ">
      
      <div className="heading-box">
        <h1 className="heading font-bold text-2xl  "> Login</h1>
        <div className="underline"></div>
      </div>
      {submitted && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label htmlFor="name" className=" label-form font-medium">
            User Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={` bg-white w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label-form font-medium">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={` bg-white w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="label-form font-medium">
            Password
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={` bg-white w-full p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div className="form_button">
          <button type="submit" className="login-button  bg-blue-400  text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
