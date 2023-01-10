import { useEffect } from "react";
import { useReducer } from "react";

const showsReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.showId];
    }

    case "REMOVE": {
      return state.filter((showId) => showId !== action.showId);
    }

    default:
      return state;
  }
};

const usePersistedReducer = (reducer, initialState, key) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};

const useWatchlist = (key = "shows") => {
  return usePersistedReducer(showsReducer, [], key);
};

export default useWatchlist;
