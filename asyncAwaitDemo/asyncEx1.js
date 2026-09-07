const url = 'https://jsonplaceholder.typicode.com';
const USER_URL = `${url}/users`; 
const POST_URL = `${url}/posts`;
const COMMENT_URL = `${url}/comments`;

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}: ${error.message}`);
    throw error;
  }
}
// async function displayData() {
//     const userData = await fetchData(USER_URL);
//     console.log(userData);
// }0987y7tm
// async function displayPosts() {
//     const postsData = await fetchData(POST_URL);
//     console.log(postsData);
// }

async function displayData() {
    try {
        const [firstUser] = await fetchData(USER_URL);
        const [firstPost] = await fetchData(`${POST_URL}?userId=${firstUser.id}`);
        const comments = await fetchData(`${COMMENT_URL}?postId=${firstPost.id}`);
        // firstUser.posts = [firstPost];
        // firstPost.comments = comments;
        console.log(comments);
    } catch (error) {
        console.error(`Error displaying data: ${error.message}`);
    }
}

displayData();
// displayPosts();