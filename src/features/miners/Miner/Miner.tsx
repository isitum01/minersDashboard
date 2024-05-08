import styles from "./Miner.module.scss";

interface MinerProps {
  miner: Miner;
}

/**
 * Component used for displaying single Miner information
 */
export default function Miner({ miner }: MinerProps) {
  return <div className={styles.miner}>{miner.port}</div>;
}
