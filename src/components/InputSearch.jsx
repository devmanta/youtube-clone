import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function InputSearch({ onSearch }) {
  const [text, setText] = useState("");

  const { keyword } = useParams();
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      alert("please input text");
      e.target.querySelector("input").focus();
      return;
    }

    onSearch(text);

    setText("");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleOnChange}
      />
      <button>search</button>
    </form>
  );
}
