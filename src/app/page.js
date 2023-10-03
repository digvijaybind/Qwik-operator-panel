import Landing from "../../components/Landing/page";
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
