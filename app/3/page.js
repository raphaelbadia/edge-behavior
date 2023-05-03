import Image from "next/image";
import { ViewCount } from "./View";

const users = new Array(20).fill(undefined).map((_, i) => ({ id: i + 1 }));

export default function Home() {
  return (
    <main>
      <h1>Experiment 3 :</h1>
      <p>
        Same as experiment 2, except we send a new x-user-id header every time
        we refetch =D
      </p>
      <p>In the API routes:</p>
      <pre>
        {`
  export async function GET(request) {
    const userId = request.headers.get("x-user-id");
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 1000))
    );
    data.current += 1;
    data.userId = userId;
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 1000))
    );
    return NextResponse.json(data, {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    });
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
