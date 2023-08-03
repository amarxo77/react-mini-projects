import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {
    query,
    setQuery,
    error: { show, msg },
  } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {show && <div className='error'>{msg}</div>}
    </form>
  );
};

export default SearchForm;
