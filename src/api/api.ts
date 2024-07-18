export const apiUrl =
  localStorage.getItem("server_url") ||
  import.meta.env.API_SOCKET_URL ||
  "ws://localhost:3001";
