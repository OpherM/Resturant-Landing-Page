import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return <div className='work-section-wrapper'>
    <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit commodi ea facilis saepe eligendi a id nam. Dolor, iure ullam.</p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam velit suscipit tenetur assumenda fugiat, architecto ex officiis nesciunt quaerat odit!
        </p>
        <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>Chris Opher</h2>
    </div>
  </div>
}

export default Testimonials;