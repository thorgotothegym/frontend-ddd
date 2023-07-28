import { useQuery, useQueryClient } from "@tanstack/react-query";
import Post from "../../../../../domain/entities/Post/Post";
import findPost from "../../../../../domain/useCases/findPost/findPost";
import { CommonQueryKeys } from "../../queryKeys";

const useFindPost = () => {
  const queryClient = useQueryClient();
  const query = useQuery<Post[] | undefined, Error>(
    [CommonQueryKeys.POST],
    () => {
      return findPost();
    },
    {
      onError: () => {
        console.log("An error has occurred, please try again");
      },
      onSuccess: () => {
        queryClient.invalidateQueries([CommonQueryKeys.POST, query]);
      },
    }
  );

  return query;
};

export default useFindPost;
