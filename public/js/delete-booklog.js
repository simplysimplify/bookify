const reviewId = document.querySelector('input[name="post-id"]')
const deleteClickHandler = async function () {
  await fetch(`/review/${reviewId}`, {
    method: "DELETE",
  });

  document.location.replace("/booklog");
};

document
  .querySelector("#delete-booklog")
  .addEventListener("click", deleteClickHandler);
