import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshFilterValue, refreshOrderList, refreshTruckList } from '../store/time-line.actions';
import { TimeLineStoreBase } from '../store/time-line-store';
import { filter, map } from 'rxjs/operators';
import { combineLatest, Subscription } from 'rxjs';
import { TrucksWithOrders } from '../models/truck-with-orders.interface';
import { Location } from '@angular/common';
import { GantDiagramData } from 'src/app/components/gant-diagram-wrapper/gant-diagram-data.interface';

export interface DataHandle {
  refreshOrderList(): void;
  refreshTruckList(): void;
}

@Injectable()
export class TimeLineBaseService implements DataHandle, OnDestroy {
  private subs: Subscription = new Subscription();
  constructor(
    private readonly store: Store<TimeLineStoreBase>,
    private location: Location
  ) {
    this.subs.add(
      this.getFilterValue$.subscribe(v => {
        if (v) {
          this.location.replaceState("time-line", "filter=" + v)
        } else {
          this.location.replaceState("time-line")
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  refreshTruckList(): void {
    this.store.dispatch(refreshTruckList());
  }

  public refreshOrderList(): void {
    this.store.dispatch(refreshOrderList());
  }

  public refreshTextValue(value: string): void {
    this.store.dispatch(refreshFilterValue({ value }));
  }

  readonly getFilterValue$ = this.store.select(item => item.timeLine.uiStates.filterTextValue);

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
  readonly getTruckByFilter$ = combineLatest([
    this.getTruckWithOrdersList$,
    this.getFilterValue$.pipe(map(value => value.toLocaleLowerCase()))
  ]).pipe(
    filter(([trucks, filterValue]) => trucks != undefined),
    map(([trucks, filterValue]) => {
      if (filterValue == undefined || filterValue == "") {
        return [...trucks];
      } else {
        return trucks.filter(t => t.name.toLocaleLowerCase().indexOf(filterValue) != -1);
      }
    })
  )

  readonly getGantDiagramData$ = this.getTruckByFilter$.pipe(
    filter(value => value != undefined),
    map(value => {
      var chartData: GantDiagramData[] = [];
      value.forEach(
        truck => truck.assignedOrders.forEach(
          order => {
            chartData.push({
              name: truck.name,
              fromDate: order.from,
              toDate: order.to,
              color: "green"
            })
          }
        )
      );

      return chartData;
    }))
}
