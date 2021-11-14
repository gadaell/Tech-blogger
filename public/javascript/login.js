async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector("#userNameLogin").value.trim();
  const password = document.querySelector("#passwordLogin").value.trim();

  if (user && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        user,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#userNameSignUp").value.trim();
  const password = document.querySelector("#passwordSignUp").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
