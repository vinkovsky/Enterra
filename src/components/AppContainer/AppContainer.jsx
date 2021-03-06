import React, { createContext, useState } from "react";
import "./AppContainer.less";

import { players } from "../../config/players";

export const AppContext = createContext({});

const AppContainer = ({ children }) => {
  const [store, setStore] = useState({ current: players, initial: players });

  return (
    <AppContext.Provider value={[store, setStore]}>
      <div className="app-container">{children}</div>
    </AppContext.Provider>
  );
};

export default AppContainer;
