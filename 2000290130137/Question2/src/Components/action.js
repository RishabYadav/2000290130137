const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjIzODExLCJpYXQiOjE3MTcyMjM1MTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFmNzYyYjc0LTFkZDctNGFkYy1hZmI0LTljODgwYjE4MjQ4OSIsInN1YiI6InJpc2hhYnlhZGF2NHVAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJhZjc2MmI3NC0xZGQ3LTRhZGMtYWZiNC05Yzg4MGIxODI0ODkiLCJjbGllbnRTZWNyZXQiOiJpc1RDS1BSWm9wSVpYclRLIiwib3duZXJOYW1lIjoiUmlzaGFiIFlhZGF2Iiwib3duZXJFbWFpbCI6InJpc2hhYnlhZGF2NHVAZ21haWwuY29tIiwicm9sbE5vIjoiMjAwMDI5MDEzMDEzNyJ9.h9BNjsl67sGypT0a1UB7-_CTpztTzxJt1rvju5GWgME";

export const fetchProduct = async () => {
  try {
    const response = await fetch("http://localhost:3001/products", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
