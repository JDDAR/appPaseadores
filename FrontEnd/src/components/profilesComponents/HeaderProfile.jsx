import React from "react";
import { useSelector } from "react-redux";

const HeaderProfile = () => {
  const userData = useSelector((state) => state.register.userData);
  const userName = userData?.userDataGeneral?.nameUser || userData.nameUser;
  console.log(userName);
  //Obtengo la inicial del nombre
  const initialName = (name) => {
    if (name) {
      const nameLetra = name.split(" ");
      return nameLetra
        .map((part) => part[0])
        .join("")
        .toUpperCase();
    }
    return "";
  };

  return (
    <>
      {userData && userData.userId ? (
        <div className="ProfileHeader">
          {/* Mostrando imagen si está disponible */}
          {userData.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Avatar usuario"
              className="ProfileHeader__img"
            />
          ) : (
            <div className="ProfileHeader__letters">
              {initialName(userName)}
            </div>
          )}
          <h3>{userName}</h3>
        </div>
      ) : null}
    </>
  );
};

export default HeaderProfile;
