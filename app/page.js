import Image from "next/image";
import styles from "./page.module.css";
import { ViewUser } from "./ViewUser";

const users = new Array(10).fill(undefined).map((_, i) => ({ id: i + 1 }));

export default function Home() {
  return (
    <main>
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
