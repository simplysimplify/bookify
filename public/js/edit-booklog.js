// const reviewId = document.querySelector('input[name="book-id"]').value;

// const editFormHandler = async function (event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="book-title"]').value;
//   const author = document.querySelector('input[name="book-author"]').value;
//   const body = document.querySelector('textarea[name="book-body"]').value;

//   await fetch(`/review/${reviewId}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       title,
//       body,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   document.location.replace("/booklog");
// };

// const deleteClickHandler = async function () {
//   await fetch(`/review/${reviewId}`, {
//     method: "DELETE",
//   });

//   document.location.replace("/booklog");
// };

// document
//   .querySelector("#edit-post-form")
//   .addEventListener("submit", editFormHandler);
// document
//   .querySelector("#delete-btn")
//   .addEventListener("click", deleteClickHandler);
