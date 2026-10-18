// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

const fetchPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchPost();
