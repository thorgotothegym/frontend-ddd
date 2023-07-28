import api from "../../../common/infraestructure/api/api";
import Post from "../../../domain/entities/Post/Post";
import { restorePost } from "../../builders/restorePost/restorePost";

const getPost = async (): Promise<Post[]> => {
  const { data } = await api.get(`/todos/`);

  return data.map(restorePost);
};

export default getPost;
