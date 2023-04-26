<div className="container mx-auto px-4 py-8">
  <h1 className="text-6xl font-black mb-8 justify-center text-center animate-pulse text-white">
    Star Wars Characters
  </h1>

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

  <div className="mb-4 flex justify-center flex-wrap gap-2">
    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
      pageNum => (
        <button
          key={pageNum}
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            currentPage === pageNum ? 'opacity-50' : ''
          }`}
          onClick={() => changePage(pageNum)}
          disabled={currentPage === pageNum}
        >
          {pageNum}
        </button>
      )
    )}
  </div>

  <div className="mb-4 flex justify-center flex-wrap gap-2">
    {genderFilters.map(gender => (
      <button
        key={gender}
        className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
          genderFilter === gender ? 'opacity-50' : ''
        }`}
        onClick={() => setGenderFilter(gender)}
      >
        {gender || 'All'}
      </button>
    ))}
  </div>

  {isLoading ? (
    <div className="flex justify-center mt-20">
      <span className="loader"></span>
    </div>
  ) : isError ? (
    <div className="flex justify-center items-center font-bold text-2xl animate-bounce text-white">
      404 Error with Data fetching!
    </div>
  ) : (
    <>
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-20">
        {paginatedCharacters.map(character => (
          <div
            key={character.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md pb-8 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <Link to={`/character/${character.id}`}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                alt={character.name}
                className="w-full h-full rounded-lg"
              />
              <h2 className="text-lg font-semibold text-black text-center">
                {character.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  )}
</div>;
