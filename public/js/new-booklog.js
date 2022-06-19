const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="book-title"]').value;
  const author = document.querySelector('input[name="book-author"]').value;
  const body = document.querySelector('textarea[name="book-body"]').value;

  await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/booklog/all-booklogs");
};

document
  .querySelector("#new-book-form")
  .addEventListener("submit", newFormHandler);
