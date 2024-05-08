import { useEffect, useState } from "react";
import styles from "./Miner.module.scss";
import StatusData from "../../../models/StatusData";
import { getMinorStatus } from "../../../helpers/StatusHelper";
import { useStore } from "../../../app/stores/store";

interface MinerProps {
  miner: Miner;
}

/**
 * Component used for displaying single Miner information
 */
export default function Miner({ miner }: MinerProps) {
  const [status, setStatus] = useState<StatusData | undefined>(undefined);
  const { minerStore, modalStore } = useStore();

  useEffect(() => {
    const minerStatus = getMinorStatus(miner.s!);
    setStatus(minerStatus);
  }, []);

  return (
    <div
      className={styles.miner}
      style={{ backgroundColor: status?.color }}
      onClick={(e) => {
        modalStore.setModalCoordinates(e.clientX, e.clientY);
        minerStore.setSelectedMiner(miner);
      }}
    >
      {miner.port}
    </div>
  );
}
