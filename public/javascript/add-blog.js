async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="blogTitle"]').value;
  const content = document.querySelector('textarea[name="blogContent"]').value;

  const response = await fetch(`/api/blogs`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".newBlogForm")
  .addEventListener("submit", newFormHandler);
