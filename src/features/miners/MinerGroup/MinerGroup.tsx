import { useEffect, useState } from "react";
import styles from "./MinerGroup.module.scss";
import Miner from "../Miner/Miner";

interface MinerGroupProps {
  groupIndex: string;
  miners: Miner[];
}

export default function MinerGroup({ groupIndex, miners }: MinerGroupProps) {
  const [groupRows, setGroupRows] = useState<Array<Miner[]>>([]);
  const NUMBER_OF_ITEMS_PER_ROW = 9;

  /**
   * Divides an array into two parts such that the second part of the array is filled before the first part is filled.
   */
  const divideArray = (arr: Miner[]) => {
    let filteredArray = arr.filter((miner) => miner.s != null); // Remove elements where 's' == null

    const firstRow = arr.slice(
      0,
      filteredArray.length - NUMBER_OF_ITEMS_PER_ROW
    );
    const secondRow = arr.slice(filteredArray.length - NUMBER_OF_ITEMS_PER_ROW);

    return [firstRow, secondRow];
  };

  useEffect(() => {
    setGroupRows([divideArray(miners)[0], divideArray(miners)[1]]);
  }, [miners]);

  return (
    <div className={styles.group}>
      <div className={styles.row}>
        {groupRows[0] &&
          groupRows[0].map(
            (miner) =>
              miner.s && (
                <Miner
                  key={groupIndex.toString() + miner.port.toString()}
                  miner={miner}
                />
              )
          )}
      </div>
      <div className={styles.row}>
        {groupRows[1] &&
          groupRows[1].map(
            (miner) =>
              miner.s && (
                <Miner
                  key={groupIndex.toString() + miner.port.toString()}
                  miner={miner}
                />
              )
          )}
      </div>
    </div>
  );
}
