import MainLayout from "../../../components/MainLayout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327106585!2d54.89782944320242!3d25.075658397134212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1705283709892!5m2!1sen!2sin"
        allowfullscreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-[600px]"
      ></iframe>
    </MainLayout>
  );
};
export default Dashboard;
