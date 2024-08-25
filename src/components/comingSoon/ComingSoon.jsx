import React from "react";
import Footer from "../footer/Footer";

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-gray-800">
      <div className="container py-10 mx-auto">
        <div className="">
          <h1 className=" ext-4xl font-bold border-b-4 border-gray-500 pb-2 shadow-lg text-white xs:text-center sm:text-start">
            In Progress
          </h1>
        </div>
        <div className="flex">
          <h1 className="text-4xl font-bold border-bt text-white mx-auto py-20">
            Coming Soon
          </h1>
        </div>
      </div>
      <div className="justify-center">
        <Footer />
      </div>
    </section>
  );
};

export default ComingSoon;
