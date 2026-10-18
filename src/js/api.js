// READ
// export const getAllBooks = () => {
//   const url = "http://localhost:3001/books";

//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//     return response.json();
//   });
// };

export const getAllBooks = async () => {
  const url = "http://localhost:3001/books";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};

// CREATE
// export const createBook = (book) => {
//   const url = "http://localhost:3001/books";

//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     })

//     .catch((err) => console.error(err));
// };

export const createBook = async (book) => {
  const url = "http://localhost:3001/books";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};

// UPDATE
// export const updateBook = (id, book) => {
//   const url = `http://localhost:3001/books/${id}`;

//   return fetch(url, {
//     method: "PUT", //PATCH якщо хочемо оновити частково
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//     return response.json();
//   });
// };

export const updateBook = async (id, book) => {
  const url = `http://localhost:3001/books/${id}`;

  const response = await fetch(url, {
    method: "PUT", //PATCH якщо хочемо оновити частково
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};

// DELETE
// export const deleteBook = (id) => {
//   const url = `http://localhost:3001/books/${id}`;

//   return fetch(url, {
//     method: "DELETE",
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//   });
// };

export const deleteBook = async (id) => {
  const url = `http://localhost:3001/books/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return await response.json();
};
