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
async function displayData() {
    const userData = await fetchData(USER_URL);
    console.log(userData);
}
async function displayPosts() {
    const postsData = await fetchData(POST_URL);
    console.log(postsData);
}

displayData();
// displayPosts();