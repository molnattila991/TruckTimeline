import { Order } from './order.interface';
export interface TrucksWithOrders {
    name: string;
    assignedOrders: Order[];
}