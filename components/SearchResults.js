import useSWR from "swr";
import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "4px",
  },
});

export default function SearchResults({ keyWord }) {
  const classes = useStyles();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.magicthegathering.io/v1/cards?name=${keyWord}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <>
      {data ? (
        data.cards.map((card) => (
          <Card className={classes.root} key={card.id}>
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                {card.name}
              </Typography>
              <img alt={card.name} src={card.imageUrl} />
            </CardContent>
          </Card>
        ))
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
