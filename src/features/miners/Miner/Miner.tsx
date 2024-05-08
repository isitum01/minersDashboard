import { useEffect, useState } from "react";
import styles from "./Miner.module.scss";
import StatusData from "../../../models/StatusData";
import { getMinorStatus } from "../../../helpers/StatusHelper";

interface MinerProps {
  miner: Miner;
}

/**
 * Component used for displaying single Miner information
 */
export default function Miner({ miner }: MinerProps) {
  const [status, setStatus] = useState<StatusData | undefined>(undefined);

  useEffect(() => {
    const minerStatus = getMinorStatus(miner.s!);
    setStatus(minerStatus);
  }, []);

  return (
    <div className={styles.miner} style={{ backgroundColor: status?.color }}>
      {miner.port}
    </div>
  );
}
