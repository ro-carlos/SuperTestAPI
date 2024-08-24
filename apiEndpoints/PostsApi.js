import { POSTS } from "./ApiEndpoints";
import apiRequest from "./ApiRequest";
import { HttpStatusCodes } from "../utils/HttpStatusCode";

const postsApi = {
  async getAllPosts() {
    console.log("BASE_URL", process.env.BASE_URL);
    const res = await apiRequest.getRequest(process.env.BASE_URL, POSTS);
    apiRequest.validateResponse(res, HttpStatusCodes.OK);
    return res.body;
  },

  async getPost(postId) {
    const res = await apiRequest.getRequest(
      process.env.BASE_URL,
      POSTS + `/${postId}`,
    );
    apiRequest.validateResponse(res, HttpStatusCodes.OK);
    return res.body;
  },

  async createNewPost(postObject) {
    const res = await apiRequest.postRequest(
      process.env.BASE_URL,
      POSTS,
      postObject,
    );
    apiRequest.validateResponse(res, HttpStatusCodes.CREATED);
    return res.body;
  },
};

//module.exports = postsApi;
export default postsApi;
