import { useEffect, useState } from "react";
import styles from "./Miner.module.scss";
import StatusData from "../../../models/StatusData";
import { getMinerStatus } from "../../../helpers/StatusHelper";
import { useStore } from "../../../app/stores/store";

interface MinerProps {
  miner: Miner;
}

/**
 * Component used for displaying single Miner information
 */
export default function Miner({ miner }: MinerProps) {
  const [status, setStatus] = useState<StatusData | undefined>(undefined);
  const { minerStore } = useStore();

  useEffect(() => {
    const minerStatus = getMinerStatus(miner.s!);
    setStatus(minerStatus);
  }, []);

  return (
    <div
      className={styles.miner}
      style={{ backgroundColor: status?.color }}
      onClick={() => {
        minerStore.setSelectedMiner(miner);
      }}
    >
      {miner.port}
    </div>
  );
}
