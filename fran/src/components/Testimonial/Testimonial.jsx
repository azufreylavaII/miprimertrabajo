import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  { id: 1, text: 'Machu Picchu me cautivó con su belleza ancestral y la energía que emana de sus piedras milenarias.', author: 'Mike Brown' },
  { id: 2, text: 'Catacaos me cautivó con su encanto rústico y la hospitalidad de su gente, un lugar que me dejó con ganas de volver.', author: 'Jane Doe' },
  { id: 3, text: 'Yanahuara me enamoró con su arquitectura colonial, sus calles empedradas y las vistas impresionantes del volcán Misti.', author: 'John Smith' }
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial">
      <img src={`./images/customer${testimonials[currentTestimonial].id}.jpg`} alt="Customer" />
      <p>{testimonials[currentTestimonial].text}</p>
      <p><strong>{testimonials[currentTestimonial].author}</strong></p>
      <button onClick={prevTestimonial}>Previous</button>
      <button onClick={nextTestimonial}>Next</button>
    </div>
  );
};

export default Testimonial;
