async function loginFormHandler(event) {
  event.preventDefault();

  const user = document.querySelector("#userNameLogin").value.trim();
  const password = document.querySelector("#passowrdLogin").value.trim();

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
