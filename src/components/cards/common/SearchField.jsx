import React from "react";
import { useRef } from "react";

export default function SearchField(props) {
  const SearchInputRef = useRef();
  const handleSearch = () => {
    let value = SearchInputRef.current.value;
    props?.onSearchInitiate(value);
  };
  return (
    <div>
      <input ref={SearchInputRef} />
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
}
