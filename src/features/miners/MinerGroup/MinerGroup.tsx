import styles from "./MinerGroup.module.scss";
import Miner from "../Miner/Miner";

interface MinerGroupProps {
  groupIndex: string;
  miners: Miner[];
}

/**
 * Component used for displaying a group of Miners
 */
export default function MinerGroup({ groupIndex, miners }: MinerGroupProps) {
  return (
    <div className={styles.group}>
      {miners.map(
        (miner) =>
          miner.s && (
            <Miner
              key={groupIndex.toString() + miner.port.toString()}
              miner={miner}
            />
          )
      )}
    </div>
  );
}
