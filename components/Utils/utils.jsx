import styles from "./Utils.module.css";
export const Shadow = ({ children, classname }) => {
  return <div className={`${styles.Container} ${classname}`}>{children}</div>;
};
