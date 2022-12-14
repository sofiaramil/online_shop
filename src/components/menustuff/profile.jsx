import React from "react";
import { userInfo } from "./register";

function Profile() {
  return (
    <>
      <div>
        <div className="profileHolder">
          <p>Имя: {userInfo[0]}</p>
          <hr />
          <p>Фамилия: {userInfo[1]}</p>
          <hr />
          <p>Возраст: {userInfo[2]}</p>
          <hr />
          <p>Email: {userInfo[3]}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
