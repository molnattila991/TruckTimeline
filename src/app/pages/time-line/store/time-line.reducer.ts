import { createReducer, on } from '@ngrx/store';
import { TimeLineStore } from './time-line-store';
import { refreshOrderList, refreshTruckList, retrievedOrderList, retrievedTruckList, refreshFilterValue, refreshRangeValue } from './time-line.actions';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
import { clone } from 'src/app/utils/clone.function';

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
    on(retrievedTruckList, (state, action) => ({ ...clone(state), trucks: [...action.items] })),
    on(retrievedOrderList, (state, action) => ({ ...clone(state), orders: [...action.items] })),
    on(refreshFilterValue, (state, action) => ({ ...clone(state), uiStates: { ...state.uiStates, filterTextValue: action.value } })),
    on(refreshRangeValue, (state, action) => ({ ...clone(state), uiStates: { ...state.uiStates, rangeValue: action.value } })),

)