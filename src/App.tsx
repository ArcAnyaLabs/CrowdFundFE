import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from "react";
import "./styles/Home.css";

export default function Home() {
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState(0);
  const [deadline, setDeadline] = useState('');

  const date = new Date();
  console.log(date.toString());
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to our small project :) 
        </h1>

        <form className="flex flex-col m-8 space-y-2">
          <div>Enter your Project name</div>
          <input value={project} onChange={(e) => setProject(e.target.value)}/>
          <div>Tell us, what's your project about?</div>
          <input value={description} onChange={(e) => setDescription(e.target.value)}/>
          <div>Fundraising target:</div>
          <input value={goal} onChange={(e) => setGoal(Number(e.target.value))} />
          <div>Deadline</div>
          <input value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </form>

        <div className="connect">
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
}
