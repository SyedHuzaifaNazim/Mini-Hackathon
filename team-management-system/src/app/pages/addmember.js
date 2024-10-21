"use client"
import React from 'react'
import { useState } from 'react';

const addmember = () => {
  const [largeInput, setLargeInput] = useState('');
  const [baseInput, setBaseInput] = useState('');
  const [smallInput, setSmallInput] = useState('');

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          value={largeInput}
          onChange={(e) => setLargeInput(e.target.value)}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Base input
        </label>
        <input
          type="text"
          id="base-input"
          value={baseInput}
          onChange={(e) => setBaseInput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          value={smallInput}
          onChange={(e) => setSmallInput(e.target.value)}
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </form>
  );
};

export default addmember;
