import Landing from "../../components/Landing/page";
import Modal from "../../components/Modal";
import { Providers } from "../store/provider";
export default function Home() {
  return (
    <Providers>
      <main>
        <Landing></Landing>
        <Modal></Modal>
      </main>
    </Providers>
  );
}
