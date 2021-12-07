import React from "react";
import {
  AppContainer,
  AppHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "./components";
import "./App.less";

const App = () => (
  <AppContainer>
    <AppHeader />
    <TableContainer>
      <TableHead />
      <TableBody>
        <TableRow />
      </TableBody>
    </TableContainer>
  </AppContainer>
);

export default App;
