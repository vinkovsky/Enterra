import React, { useContext, useState } from "react";
import { AppContext } from "../AppContainer/AppContainer";
import "./AppHeader.less";

const AppHeader = () => {
  const [state, setState] = useContext(AppContext);
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    setState({ ...state, current: state.initial });
  };

  const checkboxHandler = ({ target: { checked } }) => {
    const current = checked
      ? state.current.filter((item) => !item.online)
      : state.initial;

    setState({
      ...state,
      current,
    });
  };

  const inputHandler = ({ target: { value } }) => {
    setValue(value);

    const current = [...state.initial].filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setState({
      ...state,
      current,
    });
  };

  return (
    <div className="app-header">
      <span>Имя</span>
      <input type="text" value={value} onChange={(e) => inputHandler(e)} />
      <div>
        <span>Онлайн</span>
        <input type="checkbox" onChange={(e) => checkboxHandler(e)} />
      </div>
      <input
        type="button"
        value="Показать всех"
        onClick={() => onClickHandler()}
      />
    </div>
  );
};

export default AppHeader;
