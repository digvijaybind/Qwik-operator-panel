import Landing from "../../components/Landing/page";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav/nav";
import Top from "../../components/Nav/top";
import Pagin from "../../components/pagination/pagin";
import {Providers} from "../store/provider";
export default function Home() {
  return (
    <main>
      <Top></Top>
      <Nav></Nav>
      <Landing></Landing>
      <Modal></Modal>
      <Pagin></Pagin>
    </main>
  );
}
