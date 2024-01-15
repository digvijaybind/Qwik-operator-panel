import AddAircraftModal from "../../../components/Aircraft/AddAircraftModal";
import AircraftList from "../../../components/Aircraft/AircraftList";
import MainLayout from "../../../components/MainLayout/MainLayout";
import UpdateAircraftModal from "../../../components/Aircraft/UpdateAircraftModal";

const HelpPage = () => {
  return (
    <MainLayout>
      <div className="ml-[200px] sm:ml-0">
        <div className="ml-12">
          <h1 className="font-semibold text-2xl mt-5">Welcome to the Qwiklif Operator Panel</h1>
          <p>
            This panel equips you with essential tools for seamless air ambulance management.
            Familiarize yourself with the following menus for efficient navigation:
          </p>
          <ol className="list-decimal ml-5 mt-5">
            <li>
              <b>Dashboard:</b>
              <p>
                The <b className="text-[#555] font-semibold">Dashboard</b> provides an overview of
                critical information, including flight statuses, crew assignments, and emergency
                alerts.
              </p>
            </li>
            <li>
              <b>GPS or Maps:</b>
              <p>
                Navigate to <b className="text-[#555] font-semibold">GPS or Maps</b> for real-time
                tracking of aircraft positions. Ensure precise coordination during missions by
                leveraging interactive maps.
              </p>
            </li>
            <li>
              <b>Weather Conditions:</b>
              <p>
                Access the <b className="text-[#555] font-semibold">Weather Conditions</b> menu to
                stay informed about current and forecasted weather. Plan flights with consideration
                for weather challenges.
              </p>
            </li>
            <li>
              <b>Medical Equipments:</b>
              <p>
                Manage and track medical equipment in the{" "}
                <b className="text-[#555] font-semibold">Medical Equipments</b> section. Ensure that
                all necessary tools are available and up-to-date for each mission.
              </p>
            </li>
            <li>
              <b>Aircraft Status:</b>
              <p>
                Monitor the health and availability of your fleet in{" "}
                <b className="text-[#555] font-semibold">Aircraft Status</b> Schedule maintenance,
                view aircraft logs, and ensure the readiness of each aircraft.
              </p>
            </li>
          </ol>
          <p className="mt-5">
            <b>Additional Tips:</b>{" "}
            <p>
              Intuitive Icons: Utilize icons for quick identification of features throughout the
              application.
            </p>
            <p>
              Weather Alerts: Stay vigilant for weather alerts and adapt flight plans accordingly.
            </p>
            <p>
              Equipment Checks: Regularly update and verify medical equipment to guarantee
              preparedness.
            </p>
            <p>
              For any further assistance, refer to the user manual or reach out to our support team.
            </p>
            <p>
              Thank you for your commitment to air ambulance operations. Your dedication ensures
              timely and effective medical assistance.
            </p>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
export default HelpPage;
