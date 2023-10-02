
import Landing from "../Home/page";
import { Providers } from "../store/provider";
export default function Home() {
  return (
    <Providers>
      <main>
        <Landing></Landing>
      </main>
    </Providers>
  );
}
