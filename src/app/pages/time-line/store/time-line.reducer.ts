import { createReducer, on, Action } from '@ngrx/store';
import { TimeLineStore } from './time-line-store';
import { refreshOrderList, refreshTruckList, retrievedOrderList, retrievedTruckList, refreshFilterValue } from './time-line.actions';
import { Order } from '../models/order.interface';
import { filter } from 'rxjs/operators';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';

export const initialState: Readonly<TimeLineStore> = {
    trucks: [],
    orders: [],
    uiStates: {
        filterTextValue: "",
        rangeValue: (<RangeItem>{ start: undefined, end: undefined })
    }
}

export const timeLineReducer = createReducer(
    initialState,
    on(refreshTruckList),
    on(refreshOrderList),
    on(retrievedTruckList, (state, action) => ({ ...state, trucks: [...action.items] })),
    on(retrievedOrderList, (state, action) => ({ ...state, orders: [...action.items] })),
    on(refreshFilterValue, (state, action) => ({ ...state, uiStates: { filterTextValue: action.value } })),
)