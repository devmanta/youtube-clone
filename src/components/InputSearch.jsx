import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GoSearch } from "react-icons/go";

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
    <form
      onSubmit={handleOnSubmit}
      className="w-full flex justify-center ml-48"
    >
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleOnChange}
        className="border-1 border-gray w-11/12 p-4 pl-6 outline-none rounded-tl-full rounded-bl-full"
      />
      <button className="border-y-1 border-r-1 w-1/12 border-gray flex justify-center items-center rounded-tr-full rounded-br-full text-xl/8">
        <GoSearch />
      </button>
    </form>
  );
}
