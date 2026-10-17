import { deleteBook, getAllBooks } from "./api.js";

const bookContainer = document.querySelector("[data-book-container]");

const createMarkup = (books) => `<ul>${books
  .map(
    (book) => `<li><article data-id=${book.id}>
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <span>${book.year}</span>
        <span>🍪${book.likes}</span>
        <div class="actions">
          <button data-action="edit">Edit</button>
          <button data-action="delete">Delete</button>
        </div>
      </article></li>`,
  )
  .join("")}
</ul>`;

getAllBooks().then((data) => {
  const markup = createMarkup(data);
  bookContainer.innerHTML = markup;
});

const handleBookDelete = (event) => {
  const target = event.target;
  if (target.dataset.action !== "delete") return;

  const bookId = target.closest("[data-id]").dataset.id;

  if (!bookId) return;

  deleteBook(bookId).catch((err) => alert(`Не вдалося видалити книгу: ${err}`));

  const bookItem = target.closest("li");

  bookItem.remove();
};

bookContainer.addEventListener("click", handleBookDelete);
