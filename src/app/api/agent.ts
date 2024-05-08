/**
 * File that contains all API requests used in the project
 */

import axios, { AxiosResponse } from "axios";

// Default baseURL
axios.defaults.baseURL = "http://localhost:3000";

// Returns data field from the response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Requests
export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

// Miners requests
const Miners = {
  list: () => requests.get<ApiResponse>("/miners.json"),
};

// Agent
const agent = {
  Miners,
};

export default agent;
