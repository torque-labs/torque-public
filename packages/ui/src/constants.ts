const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.torque.so";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.torque.so";
const FUNCTIONS_URL =
  process.env.NEXT_PUBLIC_FUNCTIONS_URL ??
  "https://0tvum434ha.execute-api.us-east-1.amazonaws.com/Prod";

export { API_URL, APP_URL, FUNCTIONS_URL };
