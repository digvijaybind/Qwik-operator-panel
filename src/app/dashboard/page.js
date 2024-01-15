import AddAircraftModal from "../../../components/Aircraft/AddAircraftModal";
import AircraftList from "../../../components/Aircraft/AircraftList";
import MainLayout from "../../../components/MainLayout/MainLayout";
import UpdateAircraftModal from "../../../components/Aircraft/UpdateAircraftModal";
import Pagin from "../../../components/pagination/pagin";

const Dashboard = () => {
  return (
    <MainLayout>
      <UpdateAircraftModal />
      <AircraftList />
      <AddAircraftModal />
      <Pagin />
    </MainLayout>
  );
};
export default Dashboard;
