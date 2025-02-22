import {combineReducers} from 'redux'
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import PaymentCycleReducer from "../paymentCycle/paymentCycleReducer";
import {reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  paymentCycle: PaymentCycleReducer,
  form: formReducer
})

export default rootReducer