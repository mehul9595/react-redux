import { combineReducers } from "redux";
import TodosStore from "./todos";
import VisibilityFilter from './visibilityFilters';

export default combineReducers({TodosStore, VisibilityFilter});
