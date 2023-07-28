import getPost from "../../../infraestructure/repositories/getPost/getPost";

export default async function findPost() {
  return await getPost();
}
