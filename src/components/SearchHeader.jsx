// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";

export default function SearchHeader() {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(`/videos/${keyword}`);
  };

  return (
    <header>
      <Link to="/">HOME</Link>
      <InputSearch onSearch={handleSearch} />
    </header>
  );
}
