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

  /**
   * Function returns miners grouped by pdu property
   */
  get groupedMiners() {
    return Object.entries(
      this.minersByGroup.reduce((miners, miner) => {
        const groupIndex = miner.pdu.toString();
        miners[groupIndex] = miners[groupIndex]
          ? [...miners[groupIndex], miner]
          : [miner];
        return miners;
      }, {} as { [key: string]: Miner[] })
    );
  }

  /**
   * Sorting minors by group
   */
  get minersByGroup() {
    return Array.from(this.miners.values()).sort((a, b) => a.pdu - b.pdu);
  }
}