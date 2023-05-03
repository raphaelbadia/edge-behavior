import Image from "next/image";
import { ViewCount } from "./View";

const users = new Array(20).fill(undefined).map((_, i) => ({ id: i + 1 }));

export default function Home() {
  return (
    <main>
      <h1>Experiment 5 :</h1>
      <p>Increase and decrease the state every request.</p>
      <p>In the API routes:</p>
      <pre>
        {`
      export default async function handler(req, res) {
        // wait 0-1000ms
        data.current += 1;
        // wait 0-1000ms
        data.current += 1;
        // wait 0-1000ms
        res.json(data);
      }
      `}
      </pre>
      <table id="users">
        <tr>
          <th></th>
          <th>pagesdir api</th>
          <th>appdir node</th>
          <th>appdir edge</th>
        </tr>
        <ViewCount />
      </table>
    </main>
  );
}
