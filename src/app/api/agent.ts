/**
 * File that contains all API requests used in the project
 */

import minerData from "../../../public/miners.json";

// Miners requests
const Miners = {
  list: () => minerData,
};

// Agent
const agent = {
  Miners,
};

export default agent;
