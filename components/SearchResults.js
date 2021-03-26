import useSWR from "swr";

export default function SearchResults({ keyWord }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.magicthegathering.io/v1/cards?name=${keyWord}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <div>
      {data ? (
        data.cards.map((card) => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <img alt={card.name} src={card.imageUrl} />
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
