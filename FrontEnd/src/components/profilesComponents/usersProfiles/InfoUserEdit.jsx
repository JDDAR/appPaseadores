import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const InfoUserEdit = ({ title, data, isEditable, onSave, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState(data);

  const handleSave = () => {
    setIsEditing(false);
    onSave(editableData);
  };

  return (
    <div className="infoUser">
      <h4 className="titleContainerEdit">{title}</h4>
      {isEditing ? (
        <div className="infoUser__formEdit">
          {Object.keys(editableData).map((key) => (
            <fieldset key={key}>
              <label>{key.toUpperCase()}</label>
              <input
                type="text"
                name={key}
                value={editableData[key]}
                onChange={(e) =>
                  setEditableData({ ...editableData, [key]: e.target.value })
                }
              />
            </fieldset>
          ))}
        </div>
      ) : (
        <div className="infoUser__formEdit">
          {Object.keys(data).map((key) => (
            <h3 key={key}>
              <span>{key.toUpperCase()}</span>
              {data[key]}
            </h3>
          ))}
        </div>
      )}
      {isEditable && (
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="buttonEdit"
        >
          {isEditing ? <IoIosSave /> : <BiSolidMessageSquareEdit />}
        </button>
      )}
    </div>
  );
};

export default InfoUserEdit;
