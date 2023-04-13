import { createContext, useReducer } from "react";

export const GrandTotalContext = createContext();

const initialState = {
  game1: 0,
  game2: 0,
  game3: 0,
  game4: 0,
  game5: 0,
  game6: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "score-changed": {
      return {
        ...state,
        [Object.keys(action)[1]]: action[Object.keys(action)[1]],
      };
    }
    default:
      throw new Error(`unrecognized action ${action.type}`);
  }
};

export const GrandTotalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveNewScore = (data) => {
    dispatch({
      type: "score-changed",
      ...data,
    });
  };

  return (
    <GrandTotalContext.Provider value={{ state, action: { receiveNewScore } }}>
      {children}
    </GrandTotalContext.Provider>
  );
};
