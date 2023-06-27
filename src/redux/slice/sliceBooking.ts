import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type BookingTypes = {
    isShowOrder: boolean,
    orderMenu: any[]
}

const initialState: BookingTypes = { isShowOrder: false, orderMenu: [] }

const BookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {
        getOrderMenu: (state, action: PayloadAction) => {
            state.orderMenu.push(action.payload);
            if (state.orderMenu.length > 0) {
                state.isShowOrder = true;
            }
        },
        showOrder: (state, action: PayloadAction) => {
            state.isShowOrder = false
            state.orderMenu = []
        }
    }
})

export const {reducer: bookingReducer, actions: bookingAction} = BookingSlice