import { useEffect } from "react";
import styles from "./Dashboard.module.scss";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import MinerGroup from "../../features/miners/MinerGroup/MinerGroup";
import MinerModal from "../../features/miners/MinerModal/MinerModal";

/**
 * Function representing the view corresponding to the Dashboard page.
 */
export default observer(function Dashboard() {
  const { minerStore } = useStore();
  const { groupedMiners } = minerStore;

  useEffect(() => {
    minerStore.loadMiners();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        {groupedMiners.map(([groupIndex, miners]) => (
          <MinerGroup
            key={groupIndex}
            groupIndex={groupIndex}
            miners={miners}
          />
        ))}
      </div>
      <MinerModal />
    </div>
  );
});
