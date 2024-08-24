const { default: postsApi } = require("../apiEndpoints/PostsApi");
const itWithTags = require("../utils/ItWithTags");
const { TAGS } = require("../utils/Tags");

// Test Suite
describe("Test Suite 1", () => {
  // Test case 1
  itWithTags(
    "Should fetch all users - JIRA-1",
    { tags: [TAGS.SMOKE, TAGS.REGRESSION] },
    async () => {
      const posts = await postsApi.getAllPosts();
      expect(posts.length).toBeGreaterThan(0);
    },
  );

  // Test case 2
  itWithTags(
    "Should fetch specific user - JIRA-2",
    { tags: [TAGS.SMOKE] },
    async () => {
      const response = await postsApi.getPost("1");
      expect(response.id).toEqual(1); // Verify that the id is 1
      expect(response.userId).toEqual(1); // Verify that the userId is 1
      expect(response.title).toEqual(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      );
      expect(response.body).toEqual(
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      );
    },
  );

  // Test case 3
  itWithTags(
    "Should create new users - JIRA-3",
    { tags: [TAGS.REGRESSION] },
    async () => {
      const res = await postsApi.createNewPost({
        title: "foo",
        body: "bar",
        userId: 1,
      });

      expect(res.id).toEqual(101);
      expect(res.userId).toEqual(1);
      expect(res.title).toEqual("foo");
      expect(res.body).toEqual("bar");
    },
  );
});
