import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-3xl lg:text-center animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600 ml-8 animate-color-change">
          Areeba's Dynamic Blog :Navigating The Secrets Of Web Development
        </h2>
        <p className="text-center m-4 mt=4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up  delay-100">
          Welcome to Areeba Dynamic Blog. Here, we are passionate about sharing
          insights, expertise, and innovative ideas to help you stay ahead in
          the ever-evolving digital landscape. Explore our blog to discover the
          latest trends, best practices, and success stories in web development,
          technology, and more. Your journey to staying informed and inspired
          starts here
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "HTML & CSS",
              "JavaScript",
              "Next.JS",
              "Web Developmeent",
              "Artificial Intelligence",
              "Virtual Reality",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 text-black bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-5">Dive into our range of categories, where you will discover a wealth of knowledge ad insights tailored to your interest.Here, we share our passion for creating cutting-edge solutions, exploring new ideas, and driving digital transformation. Dive in, stay informed, and let's shape the future together!</p>
      </section>
    </div>
  );
}
