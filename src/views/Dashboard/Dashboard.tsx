import { useEffect } from "react";
import styles from "./Dashboard.module.scss";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import MinerGroup from "../../features/miners/MinerGroup/MinerGroup";

/**
 * Function representing the view corresponding to the Dashboard page.
 */
export default observer(function Dashboard() {
  const { minerStore } = useStore();
  const { groupedMiners } = minerStore;

  useEffect(() => {
    minerStore.loadMiners();
  }, []);

  useEffect(() => {
    console.log(groupedMiners);
  }, [minerStore.miners]);

  return (
    <div className={styles.dashboard}>
      {groupedMiners.map(([groupIndex, miners]) => (
        <MinerGroup key={groupIndex} groupIndex={groupIndex} miners={miners} />
      ))}
    </div>
  );
});
