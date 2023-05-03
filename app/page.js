import Image from "next/image";
import styles from "./page.module.css";
import { ViewUser } from "./ViewUser";

const users = new Array(20).fill(undefined).map((_, i) => ({ id: i + 1 }));

export default function Home() {
  return (
    <main>
      <h1>Experiment 1 :</h1>
      <p>
        The goal is to see if when receiving concurrent requests, the backend
        gets lost
      </p>
      <p>In the API routes:</p>
      <pre>
        {`
      const data = {
        current: 0,
      };
      
      export default async function handler(req, res) {
        // wait 0-1000ms
        data.current = req.query.userId;
        // wait 0-1000ms
        res.json(data);
      }
      `}
      </pre>
      <table id="users">
        <tr>
          <th>user id</th>
          <th>pagesdir api</th>
          <th>appdir node</th>
          <th>appdir edge</th>
        </tr>
        {users.map((user) => (
          <ViewUser key={user.id} user={user} />
        ))}
      </table>
    </main>
  );
}
