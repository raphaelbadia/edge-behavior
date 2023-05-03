import Image from "next/image";
import { ViewCount } from "./View";

const users = new Array(20).fill(undefined).map((_, i) => ({ id: i + 1 }));

export default function Home() {
  return (
    <main>
      <h1>Experiment 2 :</h1>
      <p>
        Is the state persisted in api routes ? A <b>count</b> {">"} 1 indicates
        that the state is not reset between every request.
      </p>
      <p>In the API routes:</p>
      <pre>
        {`
      const data = {
        current: 0,
      };
      
      export default async function handler(req, res) {
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
