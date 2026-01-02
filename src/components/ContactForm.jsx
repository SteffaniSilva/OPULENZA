import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (/^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, phone: value }));
        setErrors((prev) => ({ ...prev, phone: '' })); 
      } else {
        setErrors((prev) => ({ ...prev, phone: 'Phone number can only contain digits' }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const validateForm = () => {
    const newErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }


    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }


    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number can only contain digits';
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits';
    }


    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">TALK TO US</h2>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          maxLength="10"
          inputMode="numeric"
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <textarea
          name="message"
          placeholder="How can we help you?"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Your Message'}
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
