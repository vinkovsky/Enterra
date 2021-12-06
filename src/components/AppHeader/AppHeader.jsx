import React, { useContext, useState } from "react";
import { AppContext } from "../AppContainer/AppContainer";
import "./AppHeader.less";

const AppHeader = () => {
  const [state, setState] = useContext(AppContext);
  const [text, setText] = useState();

  const onClickHandler = () => {
    setState({ ...state, current: state.initial });
  };

  const checkboxHandler = ({ target: { checked } }) => {
    setState({
      ...state,
      current: checked
        ? state.current.filter((item) => !item.online)
        : state.initial,
    });
  };

  const inputHandler = ({ target: { value } }) => {
    setText(value);
    setState({
      ...state,
      current: state.current.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
    });
  };

  return (
    <div className="app-header">
      <span>Имя</span>
      <input type="text" value={text} onChange={(e) => inputHandler(e)} />
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
