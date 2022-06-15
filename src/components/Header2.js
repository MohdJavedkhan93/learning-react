import React, { useState } from "react";

const Header2 = (props) => {
  const [user, setUser] = useState({
    firstName: "Shyam Singh",
    lastName: "Sherawat",
  });
  // class component
  // this.state = {
  //   user: {
  //     firstName: "Shyam Singh",
  //     lastName: "Sherawat",
  //   },
  // };

  const changeUserName = () => {
    const userName = { ...user };
    userName.firstName = "Laxman Prasad";
    setUser(userName);
  };
  return (
    <>
      
      <div>
          {user.firstName} {user.lastName}
      </div>
      <div>
        <button onClick={changeUserName} style={{ cursor: "pointer" }}>
          Click Here
        </button>
      </div>
    </>
  );
};

export default Header2;
