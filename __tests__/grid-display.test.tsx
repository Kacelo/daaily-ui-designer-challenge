jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GridDisplay from "../src/components/custom/grid-display/grid-display";
import { useRouter } from "next/router";

const mockMovies = [
    {
        Title: "Movie 1",
        Year: "2021",
        Poster: "poster1.jpg",
        imdbID: "id1",
        Type: "movie",
    },
    {
        Title: "Movie 2",
        Year: "2022",
        Poster: "poster2.jpg",
        imdbID: "id2",
        Type: "movie",
    },
];

describe("GridDisplay", () => {
    it("renders loading skeleton when isLoading is true", () => {
        render(<GridDisplay movies={[]} isLoading={true} />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("renders no movies found message when movies list is empty", () => {
        render(<GridDisplay movies={[]} isLoading={false} />);
        expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
    });

    it("renders movie cards when movies list is provided", () => {
        render(<GridDisplay movies={mockMovies} isLoading={false} />);
        expect(screen.getByText(/movie 1/i)).toBeInTheDocument();
        expect(screen.getByText(/movie 2/i)).toBeInTheDocument();
    });

    it("navigates to movie detail page on card click", () => {
        const push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });

        render(<GridDisplay movies={mockMovies} isLoading={false} />);
        fireEvent.click(screen.getByText(/movie 1/i));

        expect(push).toHaveBeenCalledWith("/view-focused-movie/id1");
    });
});
