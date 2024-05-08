export default class StatusData {
    code: number;
    color: string;
    message: string;
  
    /**
     * StatusData class constructor
     */
    constructor(code: number, color: string, message: string) {
      this.code = code;
      this.color = color;
      this.message = message;
    }
  }