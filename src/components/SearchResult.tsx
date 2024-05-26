import React from "react";
import Recipe from "./Recipe";
import { ISearchResult } from "../models/ISearchResult";

function SearchResult(props: { searchResult: ISearchResult }) {
  return (
    <li>
      {" "}
      <Recipe recipe={props.searchResult.recipe} />{" "}
    </li>
  );
}
export default SearchResult;
