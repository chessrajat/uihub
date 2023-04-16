import React from "react";

const Sections_cta1 = () => {
  return (
    <section className="bg-white my-5">
      <div className="max-w-7xl mx-auto relative py-16 px-6">
        <div className="absolute top-0 right-0 w-3/4 h-full">
          <img
            src="https://www.redflagalert.com/hubfs/Featured%20Images/red-flag-alert-overcome-customer-objections.jpg"
            alt="customer care"
            className="w-full h-full"
          />
        </div>
        <div className=" w-full grid grid-cols-2">
          <div className="z-10 bg-white p-8">
            <h1 className="text-6xl text-gray-700 mb-4">
              Get to know your customers.
            </h1>
            <p className="text-gray-500 px-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              aspernatur tempora! Deleniti tenetur debitis quasi fugiat
              doloremque ipsam molestiae illum incidunt atque id non animi,
              eligendi perferendis. Necessitatibus, rerum iusto.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-1.5 text-white text-lg my-4 ml-1">
              Start for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections_cta1;
