import React from "react";

const Pages_error1 = () => {
  return (
    <main className="w-full bg-white flex flex-col items-center p-4 font-poppins">
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
        alt="error"
        className="max-w-xl"
      />
      <h3 className="font-medium text-xl mb-4">Something's missing.</h3>
      <p className="font-medium mb-8">
        The page you are looking for is not found
      </p>
      <button
        className="bg-blue-500 text-sm text-white py-4 px-16 rounded-full
                            shadow-xl shadow-blue-500/50"
      >
        Go to homepage
      </button>
    </main>
  );
};

export default Pages_error1;
