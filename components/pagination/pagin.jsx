import styles from "./Pagin.module.css";
const Pagin = () => {
  return (
    <div
      className={` ${styles.Container}  flex py-[15px] border border-x-0 b px-[15px]`}
    >
      <p className="mr-auto">Showing 1 to 10 of 50 entries</p>
      <p className="mr-[15px]">Display</p>
      <input
        type="number"
        defaultValue={10}
        className="border mr-[15px] outline-0 w-[70px]"
      />
      <div className="bg-[#DFDFDF] px-[10px]  mr-[10px] py-[5px] rounded-[4px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
        >
          <path
            d="M13.9867 12L8.60657 8L13.9867 4"
            stroke="#343A40"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex">
        {[1, 2, 3, 4].map((el) => (
          <p className="px-[10px] mr-[10px]" key={el}>
            {el}
          </p>
        ))}
      </div>
      <div className="bg-[#DFDFDF] px-[10px] py-[5px] rounded-[4px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="16"
          viewBox="0 0 23 16"
          fill="none"
        >
          <path
            d="M8.61389 12L13.994 8L8.61389 4"
            stroke="#343A40"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagin;
