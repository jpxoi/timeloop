import { API_URL } from "../../env";

export function checkAuth() {
  return !!checkToken();
}

// Path: src/Helpers/Auth.js

export function logout() {
  removeAuthToken();
  localStorage.clear();
}

// Path: src/Helpers/Auth.js

export function login(username, password) {
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject({ message: "Please fill in all the fields." });
      return;
    }
    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setAuthToken(data.token);
          setUserData(
            username,
            data.user_id,
            data.first_name,
            data.last_name,
            data.email,
            data.avatar_url
          );
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

export function signup(first_name, last_name, email, username, password) {
  return new Promise((resolve, reject) => {
    if (!first_name || !last_name || !email || !username || !password) {
      reject({ message: "Please fill in all the fields." });
      return;
    }

    if (!email.includes(".") || !email.includes("@")) {
      reject({ message: "Please enter a valid email address." });
      return;
    }

    if (username.length < 3) {
      reject({ message: "Username must be at least 3 characters long." });
      return;
    }

    if (username.length > 20) {
      reject({ message: "Username must be at most 20 characters long." });
      return;
    }

    if (!username.match(/^[a-zA-Z0-9_]+$/)) {
      reject({
        message:
          "Username must contain only letters, numbers, and underscores.",
      });
      return;
    }

    if (password.length < 8) {
      reject({ message: "Password must be at least 8 characters long." });
      return;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      reject({
        message:
          "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.",
      });
      return;
    }

    fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

export function deleteAccount(user_id) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/users/${user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          logout();
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

export function updateProfile(user_id, first_name, last_name, email, avatar_url) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/users/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
      },
      body: JSON.stringify({ first_name, last_name, email, avatar_url }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUserData(
            localStorage.getItem("username"),
            user_id,
            first_name,
            last_name,
            email,
            avatar_url
          );
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

// Path: src/Helpers/Auth.js

export function getUserData(user_id) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/users/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("AuthToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((error) => reject(error));
  });
}

export function setAuthToken(token) {
  // Store the token in cookie of the browser
  localStorage.setItem("AuthToken", token);
}

// Path: src/Helpers/Auth.js

export function removeAuthToken() {
  // Remove the token from the cookie of the browser
  localStorage.removeItem("AuthToken");
}

// Path: src/Helpers/Auth.js

export function setUserData(
  username,
  user_id,
  first_name,
  last_name,
  email,
  avatar_url
) {
  localStorage.setItem("username", username);
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("first_name", first_name);
  localStorage.setItem("last_name", last_name);
  localStorage.setItem("email", email);
  localStorage.setItem("avatar_url", avatar_url);
}

export function checkToken() {
  const token = localStorage.getItem("AuthToken");

  // Check if JWT Token is still valid and has not expired
  if (!token) {
    return false;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    removeAuthToken();
    localStorage.clear();
    return false;
  }
  return token;
}