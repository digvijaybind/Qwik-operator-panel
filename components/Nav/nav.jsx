const Nav = () => {
  const navs = {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99996 2.5L1.66663 10H4.16663V16.6667H9.16663V11.6667H10.8333V16.6667H15.8333V10H18.3333L9.99996 2.5ZM14.1666 15H12.5V10H7.49996V15H5.83329V8.49167L9.99996 4.74167L14.1666 8.49167V15Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.83337 8.49164V15H7.50004V9.99997H12.5V15H14.1667V8.49164L10 4.74164L5.83337 8.49164Z"
          fill="#28A745"
          fill-opacity="0.3"
        />
      </svg>
    ),
    name: "Dashboard",
  };

  return (
    <div className="fixed top-0 left-0 w-[200px] z-[200] h-[100vh] bg-[#40D1F0] p-[20px]">
      <div className="flex items-center ">
        <img src="/images/man.png" alt="" />
        <p className="ml-[10px] text-black">Qwiklif Admin</p>
      </div>
      <div className="mt-[40px]">
        {Array(8)
          .fill(navs)
          .map((el) => (
            <div key={el} className="text-white flex items-center py-[10px]">
              <div>{el.icon}</div>
              <p className="pl-[10px] text-white">{el.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Nav;
