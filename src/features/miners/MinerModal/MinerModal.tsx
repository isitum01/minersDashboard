import { observer } from "mobx-react-lite";
import styles from "./MinerModal.module.scss";
import { useStore } from "../../../app/stores/store";
import { useState } from "react";

/**
 * MinerModal component, used to display selected miner information
 */
export default observer(function MinerModal() {
  const { minerStore, modalStore } = useStore();
  const { selectedMiner, selectedMinerStatus } = minerStore;
  const { modalX, modalY } = modalStore;
  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  return (
    selectedMiner && (
      <div
        className={styles.modal}
        style={{ top: modalY || 0, left: modalX || 0 }}
      >
        <div
          className={styles.close}
          onClick={() => {
            modalStore.closeModal();
          }}
        >
          X
        </div>
        <div className={styles.content}>
          <div
            className={styles.status}
            style={{ background: selectedMinerStatus?.color }}
          >
            STATUS: {selectedMiner.s} - {selectedMinerStatus?.message}
          </div>
          <p
            className={styles.toggleInfo}
            onClick={() => {
              setMoreInfo(!moreInfo);
            }}
          >
            {moreInfo ? "Less" : "More..."}
          </p>
          {moreInfo && (
            <div className={styles.moreInfo}>
              {selectedMiner.TH5s && (
                <p>Hashrate (last 5s): {selectedMiner.TH5s}</p>
              )}
              {selectedMiner.THAvg && (
                <p>Hashrate (last 1h): {selectedMiner.THAvg}</p>
              )}
              {selectedMiner.tB && <p>Temperature: {selectedMiner.tB}</p>}
              {selectedMiner.freq && (
                <p>Frequency (last 1h): {selectedMiner.freq}</p>
              )}
              {selectedMiner.w && <p>Power (last 5s): {selectedMiner.w}</p>}
            </div>
          )}
        </div>
      </div>
    )
  );
});
