import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshOrderList, refreshTruckList } from '../store/time-line.actions';
import { TimeLineStoreBase } from '../store/time-line-store';
import { filter, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { TrucksWithOrders } from '../models/truck-with-orders.interface';

export interface DataHandle {
  refreshOrderList(): void;
  refreshTruckList(): void;
}

@Injectable()
export class TimeLineBaseService implements DataHandle {
  constructor(
    private readonly store: Store<TimeLineStoreBase>
  ) {

  }


  refreshTruckList(): void {
    this.store.dispatch(refreshTruckList());
  }

  public refreshOrderList(): void {
    this.store.dispatch(refreshOrderList());
  }

  readonly getTruckList$ = this.store.select(item => item.timeLine.trucks);
  readonly getOrderList$ = this.store.select(item => item.timeLine.orders);

  readonly getTruckWithOrdersList$ = combineLatest([
    this.getTruckList$, this.getOrderList$
  ]).pipe(
    filter(([trucks, orders]) => trucks != undefined && orders != undefined),
    map(
      ([trucks, orders]) => trucks.map(
        truck => (<TrucksWithOrders>{
          name: truck.name,
          assignedOrders: truck.assignedOrderId.map(orderId => orders.find(o => o.id == orderId))
        })
      )
    )
  );
}
