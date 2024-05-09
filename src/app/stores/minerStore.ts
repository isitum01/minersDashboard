import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import StatusData from "../../models/StatusData";
import { getMinerStatus } from "../../helpers/StatusHelper";

/**
 * MinerStore class
 */
export default class MinerStore {
  miners: Miner[] = [];
  selectedMiner: Miner | null = null;
  selectedMinerStatus: StatusData | null = null;
  dashboardInfo: DashboardData | null = null;

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
        this.dashboardInfo = fetchedMiners["19"];
        this.miners = this.dashboardInfo.values;
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

  /**
   * Sets selected Miner (used to populate modal data)
   */
  setSelectedMiner(miner: Miner | null) {
    this.selectedMiner = miner;
    if (miner != null) this.selectedMinerStatus = getMinerStatus(miner.s!);
  }
}
