import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from "./redux/reducer";



 const store = configureStore({
    reducer: {
      dataReducer
    }
  })
export default store;
