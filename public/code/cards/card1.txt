import React from "react";

const card1 = () => {
  return (
    <div className="max-w-xs p-5 bg-white drop-shadow-2xl rounded-xl">
      <img
        src="https://navbharattimes.indiatimes.com/thumb/89071509/running-shoes-89071509.jpg?imgsize=93890&width=540&height=405&resizemode=75"
        alt="shoes"
        draggable={false}
        className="rounded-xl"
      />
      <h1 className="mt-3 py-2 text-4xl font-bebas text-gray-700">Sneakers</h1>
      <p className="text-sm text-zinc-400 mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        eaque deleniti debitis
      </p>
      <button className="px-10 py-1 border border-zinc-500 rounded-md text-zinc-600">
        Buy
      </button>
    </div>
  );
};

export default card1;
