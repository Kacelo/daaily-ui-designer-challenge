import React from "react";
import Image from "next/image";
import { MovieSearchResult } from "@/app/interfaces/movie-interface";

export const Cards = (props: MovieSearchResult) => {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg"
        // style={{ background: `url(${props?.Poster})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={props.Poster}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {props.Title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {props.Year}
          </p>
        </div>
      </div>
    </div>
  );
};
