import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
import { GantDiagramData } from 'src/app/components/gant-diagram-wrapper/gant-diagram-data.interface';
import { TimeLineStoreBase } from '../store/time-line-store';
import { refreshFilterValue, refreshRangeValue } from '../store/time-line.actions';
import { TimeLineBaseService } from './time-line-base.service';
import { Location } from '@angular/common';

@Injectable()
export class TimeLineFilterService {
  private subs: Subscription = new Subscription();
  constructor(
    private baseService: TimeLineBaseService,
    private store: Store<TimeLineStoreBase>,
    private location: Location
  ) {
    this.subs.add(
      this.getFilterValue$.subscribe(v => {
        if (v && v.filterTextValue || v.rangeValue) {
          let query = "";
          if (v.filterTextValue) {
            query += "filter=" + v.filterTextValue;
          }

          if (v.rangeValue && v.rangeValue.end && v.rangeValue.start) {
            query += (query == "" ? "" : "&") + "start=" + getFormattedDate(v.rangeValue.start) + " &end=" + getFormattedDate(v.rangeValue.end);
          }

          this.location.replaceState("time-line", query)
        } else {
          this.location.replaceState("time-line")
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  public refreshTextValue(value: string): void {
    this.store.dispatch(refreshFilterValue({ value }));
  }

  public refreshRangeValue(value: RangeItem): void {
    this.store.dispatch(refreshRangeValue({ value }));
  }

  readonly getFilterTextValue$ = this.store.select(item => item.timeLine.uiStates.filterTextValue);
  readonly getFilterRangeValue$ = this.store.select(item => item.timeLine.uiStates.rangeValue);
  readonly getFilterValue$ = this.store.select(item => item.timeLine.uiStates);

  readonly getTruckByFilter$ = combineLatest([
    this.baseService.getTruckWithOrdersList$,
    this.getFilterTextValue$.pipe(
      map(value => value ? value.toLocaleLowerCase() : ""))
  ]).pipe(
    filter(([trucks, filterValue]) => trucks != undefined),
    map(([trucks, filterValue]) => {
      if (filterValue == undefined || filterValue == "") {
        return [...trucks];
      } else {
        return trucks.filter(t => t.name.toLocaleLowerCase().indexOf(filterValue) != -1);
      }
    })
  );

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
    })
  );
}

function getFormattedDate(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}