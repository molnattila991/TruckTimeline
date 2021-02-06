import { Truck } from '../models/truck.interface';
import { Order } from '../models/order.interface';
import { UIStates } from '../models/ui-states.inteface';

export interface TimeLineStoreBase {
    timeLine: TimeLineStore;
}

export interface TimeLineStore {
    trucks: Truck[];
    orders: Order[];
    uiStates: UIStates;
}