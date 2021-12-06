import React from "react";
import "./AppHeader.less";

const AppHeader = () => {
  return (
    <div className="app-header">
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

export default AppHeader;
