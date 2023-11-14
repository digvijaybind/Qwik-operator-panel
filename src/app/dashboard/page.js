import Landing from "../../../components/Landing/page";
import Modal from "../../../components/Modal";
import Nav from "../../../components/Nav/nav";

import UpdateModal from "../../../components/UpdateModal/page";
import Top from "../../../components/pagination/Nav/top";
import Pagin from "../../../components/pagination/pagin";


const Dashboard = () => {
  return (
    <main>
      <Top />
      <Nav />
      <Landing />
      <Modal />
      <UpdateModal />
      <Pagin />
    </main>
  );
};
export default Dashboard;
