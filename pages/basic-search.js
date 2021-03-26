import { useState } from "react";

import SearchResults from "../components/SearchResults";

export default function FirstPost() {
  const [keyWord, setKeyWord] = useState("");

  return (
    <>
      <h1>MTG Card Search</h1>
      <input
        onChange={(event) => {
          if (event.target && event.target.value) {
            setKeyWord(event.target.value);
          } else {
            setKeyWord("");
          }
        }}
      />
      <section>
        <SearchResults keyWord={keyWord} />
      </section>
    </>
  );
}
