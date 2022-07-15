import React, { useContext, useReducer } from "react";

export interface AppState {
  city: number;
  language: string;
}

type Action =
  | {
      type: "SET_CITY";
      payload: number;
    }
  | {
      type: "SET_LANGUAGE";
      payload: string;
    };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

interface LocalProviderProps {
  children: React.ReactNode;
  initialState: AppState;
}

export const AppContext = React.createContext<
  [AppState, React.Dispatch<Action>]
>([{ city: 58, language: "ar" }, () => {}]);
export const UseAppContext = () => useContext(AppContext);

export const LocalProvider = ({
  children,
  initialState,
}: LocalProviderProps) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export const useCity = (): number => {
  const [state, _] = useContext(AppContext);
  return state.city;
};

export const useLanguage = (): string => {
  const [state, _] = useContext(AppContext);
  return state.language;
};

export const setGlobalCity = (city: number): Action => ({
  type: "SET_CITY",
  payload: city,
});

export const useAppDispatch = () => {
  const [_, dispatch] = useContext(AppContext);
  return dispatch;
};
