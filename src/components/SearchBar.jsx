import React, { useState } from 'react';

const SearchBar = ({ onCityChange, onWeatherDataChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onCityChange(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='searchbar-container  flex flex-col md:flex-row justify-center items-center mb-20'>
      <input
        type="text"
        placeholder="Enter City Name......."
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 text-16px border w-60 border-solid border-gray-300 rounded-full md:mr-2 mb-2 md:mb-0  md:w-200 text-black"
      />
      <button
        className="p-2 text-16 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:text-black w-full md:w-auto"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
