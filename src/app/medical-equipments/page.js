import MainLayout from "../../../components/MainLayout/MainLayout";
import AddMedicalEquipmentModal from "../../../components/MedicalEquipments/AddMedicalEquipmentModal";
import MedicalEquipmetsList from "../../../components/MedicalEquipments/MedicalEquipmentsList";

const MedicalEquipmentsPage = () => {
  return <MainLayout>
    <MedicalEquipmetsList />
    <AddMedicalEquipmentModal />
  </MainLayout>;
};
export default MedicalEquipmentsPage;
