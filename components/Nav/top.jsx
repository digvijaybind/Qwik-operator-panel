import { Shadow } from "../Utils/utils";
import styles from "./Nav.module.css"
const Top = () => {
  return (
    <div className={styles.Top_container}>
      <Shadow classname={"flex justify-center"}>
        <img className="py-[20px]" src="/images/logo.png" alt="logo" />
      </Shadow>
    </div>
  );
};

export default Top;
