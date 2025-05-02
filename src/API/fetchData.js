export const fetchPosts = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export const fetchBooks = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/dragonlance_books`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const fetchCharacters = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/dragonlance_characters`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const fetchUser = async (userID) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${userID}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

// export const fetchBookCharacters = async () => {
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/bookchar/:id`);
//   const data = await response.json();
//   return data;
// };
