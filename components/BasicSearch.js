import { useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";

import SearchResults from "./SearchResults";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  results: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  search: {
    margin: "8px",
    "& .MuiFormLabel-root": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
      color: "#fff",
    },
  },
  searchBox: {
    padding: "16px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#04246b",
  },
});

export default function MtgSearch() {
  const [keyWord, setKeyWord] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchBox}>
        <TextField
          className={classes.search}
          label="Search Here"
          variant="outlined"
          onChange={(event) => {
            if (event.target && event.target.value) {
              setKeyWord(event.target.value);
            } else {
              setKeyWord("");
            }
          }}
        />
      </div>
      <section>
        <div className={classes.results}>
          <SearchResults keyWord={keyWord} />
        </div>
      </section>
    </div>
  );
}
