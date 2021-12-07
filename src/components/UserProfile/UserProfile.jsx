import React from "react";
import "./UserProfile.less";

const UserProfile = ({ player: { name, level, online }, setPlayer }) => {
  const onClickHandler = () => {
    setPlayer((state) => ({ ...state, popup: false }));
  };
  return (
    <tr className="userprofile-container">
      <td className="userprofile">
        <div>
          <h1>{name}</h1>
          <p>{online ? "Онлайн" : "Офлайн"}</p>
          {[...new Array(level)].map((_, index) => (
            <i className="star" key={index} />
          ))}
          <button onClick={() => onClickHandler()}>Закрыть</button>
        </div>
      </td>
    </tr>
  );
};

export default UserProfile;
