import React from 'react';

type Props = {};

function Filtering({}: Props) {
  return (
    <div>
      <div className="text-center mb-4 font-bold text-2xl text-white">
        {characters.length} characters found
      </div>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={event => setNameFilter(event.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border-none"
        />
      </div>
    </div>
  );
}

export default Filtering;
