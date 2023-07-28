import Post from "../../../domain/entities/Post/Post";

export const restorePost = ({ completed, id, title, userId }: Post) => {
  return new Post({
    completed,
    id,
    title,
    userId,
  });
};
