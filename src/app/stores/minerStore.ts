import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

/**
 * MinerStore class
 */
export default class MinerStore {
  miners: Miner[] = [];

  /**
   * MinerStore class constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Loads list of miners through the provided agent function
   *
   * @returns
   */
  loadMiners = async () => {
    try {
      const fetchedMiners = await agent.Miners.list();

      runInAction(() => {
        this.miners = fetchedMiners["19"].values;
      });
    } catch (error) {
      console.log(error);
    }
  };
}
