import { useEffect } from "react";
import Miner from "../../features/miners/Miner/Miner";
import styles from "./Dashboard.module.scss";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

/**
 * Function representing the view corresponding to the Dashboard page.
 */
export default observer(function Dashboard() {
  const { minerStore } = useStore();

  useEffect(() => {
    minerStore.loadMiners();
  }, []);

  return (
    <div className={styles.dashboard}>
      <ul>
        {minerStore.miners &&
          minerStore.miners.map((miner) => (
            <Miner
              key={miner.pdu.toString() + miner.port.toString()}
              miner={miner}
            />
          ))}
      </ul>
    </div>
  );
});
