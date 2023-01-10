import { useReducer } from "react";
import { useEffect } from "react";
import getApi from "./config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }

    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const useShow = (showId) => {
  const [state, dispatch] = useReducer(reducer, {
    show: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    getApi(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
      .then((result) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: result });
        }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", error: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [showId]);
  return state;
};

export default useShow;
