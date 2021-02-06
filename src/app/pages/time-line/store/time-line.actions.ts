import { createAction, props } from '@ngrx/store';
import { Truck } from '../models/truck.interface';
import { Order } from '../models/order.interface';
import { RangeItem } from '../../../components/date-time-range-selector/range-item.interface';

export const refreshTruckList = createAction(
    '[Timeline] Refresh Truck list'
);

export const refreshOrderList = createAction(
    '[Timeline] Refresh Order list'
);


export const retrievedTruckList = createAction(
    '[Timeline] Retrieved Truck list',
    props<{ items: Truck[] }>()
);

export const retrievedOrderList = createAction(
    '[Timeline] Retrieved Order list',
    props<{ items: Order[] }>()
);

export const refreshFilterValue = createAction(
    '[Timeline] Refresh Filter value',
    props<{ value: string }>()
)

export const refreshRangeValue = createAction(
    '[Timeline] Refresh Time Range value',
    props<{ value: RangeItem }>()
)