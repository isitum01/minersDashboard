import { useEffect, useState } from "react";
import agent from "../../app/api/agent";

export default function Dashboard() {
  const [miners, setMiners] = useState<Miner[]>([]);

  useEffect(() => {
    agent.Miners.list().then((response) => {
      setMiners(response["19"].values);
    });
  }, []);

  return (
    <div>
      <ul>{miners && miners.map((miner) => <li>{miner.port}</li>)}</ul>
    </div>
  );
}
