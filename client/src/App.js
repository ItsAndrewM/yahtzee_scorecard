import GlobalStyles from "./GlobalStyles";
import Title from "./static_yahtzee/Title";
import Yahtzee from "./static_yahtzee/Yahtzee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Yahtzee />
    </BrowserRouter>
  );
};

export default App;
