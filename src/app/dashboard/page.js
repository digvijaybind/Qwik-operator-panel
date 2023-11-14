import Landing from "../../../components/Landing/page";
import Modal from "../../../components/Modal";
import Nav from "../../../components/Nav/nav";
import Top from "../../../components/Nav/top";
import UpdateModal from "../../../components/UpdateModal/page";
import Pagin from "../../../components/pagination/pagin";

const Dashboard = () => {
  return (
    <main>
      <Top></Top>
      <Nav></Nav>
      <Landing></Landing>
      <Modal></Modal>
      <UpdateModal></UpdateModal>
      <Pagin></Pagin>
    </main>
  );
};
export default Dashboard;
