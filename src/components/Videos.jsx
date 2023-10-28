import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () =>
      axios
        .get(`/videos/${keyword ? "search" : "popular"}.json`)
        .then((res) => res.data.items),
  });

  return <div>videos {keyword ? keyword : "🔥"}</div>;
}
