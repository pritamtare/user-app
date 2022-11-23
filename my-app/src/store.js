import {createStore} from "redux";
import { roortReducer } from "./redux/reducers";

export const store = createStore(roortReducer)