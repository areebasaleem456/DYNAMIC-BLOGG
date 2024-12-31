import React from "react";
import Blogcard from "../components/blogcard";

const Mega = () => {
  const posts = [
    {
      id: "1",
      title: " HTML, CSS, and JS",
      description:
        "The essential building blocks for creating interactive, visually appealing, and dynamic websites and web applications",
      date: "15-1-2024",
      image: "/slide1.jpg",
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      description:
        "To transform your coding skills in a short span with an immersive bootcamp experience",
      date: "01-02-2024",
      image: "/slide2.jpg",
    },
    {
      id: "3",
      title: "React.JS",
      description:
        "An efficient component-based development and seamless rendering of complex UI components",
      date: "01-04-2024",
      image: "/slide3.jpg",
    },
    {
      id: "4",
      title: "Node.JS",
      description:
        "To build fast, scalable, and real-time web applications with Node.js, a powerful JavaScript runtime ",
      date: "15-04-2024",
      image: "/slide4.jpg",
    },
    {
      id: "5",
      title: "Word Press",
      description:
        "To unlock the power of easy website creation and management with WordPress",
      date: "01-05-2024",
      image: "/slide5.jpg",
    },
    {
      id: "6",
      title: "Angular.JS",
      description:
        "To build dynamic, data-driven web applications with AngularJS, a powerful JavaScript framework ",
      date: "15-05-2024",
      image: "/slide6.jpg",
    },
    {
      id: "7",
      title: "Web Security",
      description:
        "To protect your website and users from cyber threats with robust web security",
      date: "01-06-2024",
      image: "/slide7.jpg",
    },
    {
      id: "8",
      title: "E-Commerece Website",
      description:
        "To create a seamless online shopping experience with a customized e-commerce website ",
      date: "15-06-2024",
      image: "/slide8.jpg",
    },
    {
      id: "9",
      title: "Full Stack Development",
      description:
        "To master the art of building complete web applications from front-end to back-end",
      date: "01-07-2024",
      image: "/slide9.jpg",
    },
    {
      id: "10",
      title: "Progressive Web Apps (PWAs)",
      description:
        "To build fast, reliable, and engaging mobile experiences with Progressive Web Apps (PWAs),",
      date: "15-7-2024",
      image: "/slide10.jpg",
    },
    {
      id: "11",
      title: "Web Performance Optimization",
      description:
        "To speed up page loads, improve user experience, and boost search engine rankings by optimizing images, code, and server configurations",
      date: "01-08-2024",
      image: "/slide11.jpg",
    },
    {
      id: "12",
      title: "Accessibility in Web Development",
      description:
        "An  inclusive and user-friendly websites that cater to diverse abilities and needs.",
      date: "15-08-2024",
      image: "/slide12.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center mb-11 text-blue-700 animate-color-change">
        Exploring The World Of Web Development
      </h1>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <Blogcard post={post} isDarkBackground={index % 2 ===0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
