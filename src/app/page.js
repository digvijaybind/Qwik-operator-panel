import Landing from "../../components/Landing/page";
import Modal from "../../components/Modal";
import Pagin from "../../components/pagination/pagin";
import { Providers } from "../store/provider";
export default function Home() {
  return (

      <main>
        <Landing></Landing>
        <Modal></Modal>
        <Pagin></Pagin>
      </main>
  
  );
}
