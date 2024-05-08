import StatusData from "../models/StatusData";

/**
 * Gets status data based on status code
 * @param statusCode
 */
export const getMinorStatus = (statusCode: number) => {
  switch (statusCode) {
    case 10:
      return new StatusData(statusCode, "#50C804", "OK");
    case 20:
      return new StatusData(statusCode, "#7499FF", "HASHRATE DROP");
    case 30:
      return new StatusData(statusCode, "#FFC859", "WARNING");
    case 40:
      return new StatusData(statusCode, "#F49F59", "MINOR ISSUES");
    case 50:
      return new StatusData(statusCode, "#E97659", "MAJOR ISSUES");
    case 60:
      return new StatusData(statusCode, "#EF1818", "CRITICAL");
    default:
      return new StatusData(statusCode, "#50C804", "OK");
  }
};