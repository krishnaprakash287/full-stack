import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Krishna Restaurant is a vibrant eatery that specializes in authentic Indian cuisine, offering a diverse menu that includes classic dishes such as biryani, curry, and tandoori items. The ambiance is warm and inviting, often featuring traditional Indian decor, with rich colors and ornate patterns that reflect the culture.

Guests can expect friendly service and a welcoming atmosphere, making it a great spot for families, friends, or a romantic dinner. Many locations may also offer vegetarian and vegan options, catering to a wide range of dietary preferences. Whether you're looking for a hearty meal or a quick snack, Krishna Restaurant aims to provide a memorable dining experience.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
