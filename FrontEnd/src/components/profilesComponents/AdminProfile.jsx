import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../api/axioInstance";
import { setInfoUsers } from "../../redux/slices/adminSlice";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const usersAdmin = useSelector((state) => state.admin.infoAdmin);

  async function getAllUsers() {
    try {
      const response = await axiosInstance.get("/api/ownersUsers");
      console.log("Respuesta: " + JSON.stringify(response.data.info));
      dispatch(setInfoUsers(response.data.info));
    } catch (err) {
      console.log("error" + err.message);
    }
  }

  return (
    <>
      <button onClick={getAllUsers}>Ver usuarios </button>
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>id</th>
            <th>nombre</th>
            <th>tel</th>
            <th>Direccion</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {usersAdmin.map((d, i) => (
            <tr key={i}>
              <td>{d._id}</td>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.telephone}</td>
              <td>{d.address}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminProfile;
