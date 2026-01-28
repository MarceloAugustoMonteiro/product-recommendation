import React from 'react';

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
