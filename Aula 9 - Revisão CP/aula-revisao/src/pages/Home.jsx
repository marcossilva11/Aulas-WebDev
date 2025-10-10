import { useEffect, useState } from "react";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const URL = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
    fetch(`${URL}node`)
      .then((res) => res.json())
      .then((data) => setReactRepos(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        GitHub Repositories Explorer
      </h1>
      <p>{reactRepos.forEach(a => a)}</p>
    </div>
  );
}
