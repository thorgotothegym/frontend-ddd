import useFindPost from "../../../infraestructure/builders/hooks/queries/useFindPost/useFindPost";

export const Home = (): JSX.Element => {
  const { data } = useFindPost();
  console.log("data", data);

  return (
    <>
      home
      {/* {isLoading ? "loading" : null}
      {data?.map(({ completed, id, title, userId }) => {
        return (
          <>
            <h3>title: {title}</h3>
            <p>userId: {userId}</p>
            <code>id: {id}</code>
            <span>completed: {completed}</span>
          </>
        );
      })} */}
    </>
  );
};
