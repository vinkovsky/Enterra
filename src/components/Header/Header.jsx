import React from "react";
import "./Header.less";

const Header = () => {
  return (
    <div className="header">
      <span>Имя</span>
      <input type="text" />
      <div>
        <span>Онлайн</span>
        <input type="checkbox" />
      </div>
      <input type="button" value="Показать всех" />
    </div>
  );
};

export default Header;
