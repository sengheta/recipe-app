import React from "react";
import SearchResult from "./SearchResult";
import { ISearchResult } from "../models/ISearchResult";

function SearchResults(props: { searchResults: ISearchResult[] }) {
  return (
    <ol>
      {props.searchResults.map((x) => (
        <SearchResult searchResult={x} />
      ))}
    </ol>
  );
}

export default SearchResults;
