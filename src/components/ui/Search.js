import React, { useState, useRef } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const timerRef = useRef(null);

  const onChange = (newValue) => {
    setText(newValue);

    if (newValue && newValue.length > 2) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        getQuery(newValue);
      }, 500);
    } else if (
      ((newValue && newValue.length <= 2) || !newValue) &&
      text.length > 2
    ) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        getQuery('');
      }, 500);
    }
  };
  return (
    <section className="search">
      <input
        type="text"
        className="form-control"
        placeholder="Search characters"
        value={text}
        onChange={({ target }) => onChange(target.value)}
        autoFocus
      />
    </section>
  );
};

export default Search;
