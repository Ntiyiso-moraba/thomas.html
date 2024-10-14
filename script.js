function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "thomasmuller@gmail.com" && password === "password123") {
    alert("Login successful!");
    window.location.href =
      "https://www.fusioncharts.com/dashboards/smart-energy-monitoring-dashboard";
    return false;
  }

  if (email.trim() === "" || password.trim() === "") {
    document.getElementById("error-message").textContent =
      "Please fill in all fields";
    return false;
  }

  if (!email.includes("@")) {
    document.getElementById("error-message").textContent =
      "Please enter a valid email address";
    return false;
  }

  document.getElementById("error-message").textContent =
    "Invalid email or password";
}
