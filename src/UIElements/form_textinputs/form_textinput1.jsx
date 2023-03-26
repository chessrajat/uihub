import React from "react";

const Form_textinput1 = () => {
  return (
    <div>
      <form
        className="py-2 px-4 bg-white border-2 rounded border-blue-900 flex flex-col
                        w-96">
        <label className="text-sm text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="outline-none placeholder:text-gray-400"
        />
      </form>
    </div>
  );
};

export default Form_textinput1;
