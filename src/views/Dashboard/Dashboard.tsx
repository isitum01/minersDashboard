import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import Miner from "../../features/miners/Miner/Miner";
import styles from "./Dashboard.module.scss"

/**
 * Function representing the view corresponding to the Dashboard page.
 */
export default function Dashboard() {
  const [miners, setMiners] = useState<Miner[]>([]);

  useEffect(() => {
    agent.Miners.list().then((response) => {
      setMiners(response["19"].values);
    });
  }, []);

  return (
    <div className={styles.dashboard}>
      <ul>{miners && miners.map((miner) => <Miner miner={miner} />)}</ul>
    </div>
  );
}
