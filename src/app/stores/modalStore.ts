import { makeAutoObservable } from "mobx";

/**
 * ModalStore class
 */
export default class ModalStore {
  modalX: number | null = null;
  modalY: number | null = null;

  /**
   * ModalStore class constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Sets modal coordinates to provided coordinates
   * @param x 
   * @param y 
   */
  setModalCoordinates(x: number | null, y: number | null) {
    this.modalX = x;
    this.modalY = y;
  }

  /**
   * Resets modal coordinates when modal is closed
   */
  closeModal() {
    this.setModalCoordinates(null, null);
  }
}