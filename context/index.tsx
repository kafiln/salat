import React, { useContext, useReducer } from "react";

export type Periodicity = "MONTHLY" | "DAILY";

export interface AppState {
  city: number;
  language: string;
  periodicity: Periodicity;
}

type Action =
  | {
      type: "SET_CITY";
      payload: number;
    }
  | {
      type: "SET_LANGUAGE";
      payload: string;
    }
  | {
      type: "TOGGLE_PERIODICITY";
    };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_CITY":
      localStorage.setItem("city", String(action.payload));
      return { ...state, city: action.payload };
    case "TOGGLE_PERIODICITY":
      const periodicity = state.periodicity === "MONTHLY" ? "DAILY" : "MONTHLY";
      return { ...state, periodicity };
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
>([{ city: 58, language: "ar", periodicity: "DAILY" }, () => {}]);
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

export const usePeriodicity = (): Periodicity => {
  const [state, _] = useContext(AppContext);
  return state.periodicity;
};

export const useLanguage = (): string => {
  const [state, _] = useContext(AppContext);
  return state.language;
};

export const setGlobalCity = (city: number): Action => ({
  type: "SET_CITY",
  payload: city,
});

export const togglePeriodicity = (): Action => ({
  type: "TOGGLE_PERIODICITY",
});

export const useAppDispatch = () => {
  const [_, dispatch] = useContext(AppContext);
  return dispatch;
};
