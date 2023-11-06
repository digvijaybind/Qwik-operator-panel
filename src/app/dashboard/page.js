import Modal from "../../../components/Modal";
import Landing from "../../../components/Landing/page";
import Pagin from "../../../components/pagination/pagin";
import Top from "../../../components/Nav/top";
import Nav from "../../../components/Nav/nav";
const Dashboard = () => {
  return (
    <div>
      <Top></Top>
      <Nav></Nav>
      <Modal></Modal>
      <Landing></Landing>
      <Pagin></Pagin>
    </div>
  );
};

export default Dashboard;
