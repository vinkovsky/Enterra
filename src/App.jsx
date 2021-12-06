import React, { createContext } from "react";
import {
  AppContainer,
  AppHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "./components";

export const AppContext = createContext({});

const App = () => (
  <AppContext.Provider value={{ arr: [1, 2, 3] }}>
    <AppContainer>
      <AppHeader />
      <TableContainer>
        <TableHead />
        <TableBody>
          <TableRow />
        </TableBody>
      </TableContainer>
    </AppContainer>
  </AppContext.Provider>
);

export default App;
