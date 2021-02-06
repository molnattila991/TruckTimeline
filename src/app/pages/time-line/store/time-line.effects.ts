import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TimeLineDataProviderService } from "../services/time-line-data-provider.service";
import { refreshTruckList, refreshOrderList, retrievedTruckList, retrievedOrderList } from './time-line.actions';
import { catchError, map, switchMap, tap } from "rxjs/operators"
import { EMPTY } from "rxjs";
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { Store } from "@ngrx/store";
import { TimeLineStoreBase } from './time-line-store';

@Injectable()
export class TimeLineEffects {
    loadTrucksEffect$ = createEffect(() => this.actions$.pipe(
        ofType(refreshTruckList.type),
        switchMap(
            () => this.dataProvider.getAllTruck()
                .pipe(
                    map(items => (retrievedTruckList({ items })),
                        catchError(() => EMPTY)
                    ))
        ))
    );

    loadOrdersEffect$ = createEffect(() => this.actions$.pipe(
        ofType(refreshOrderList.type),
        switchMap(
            () => this.dataProvider.getAllOrders()
                .pipe(
                    map(items => (retrievedOrderList({ items })),
                        catchError(() => EMPTY)
                    ))
        ))
    );

    constructor(
        private actions$: Actions,
        private dataProvider: TimeLineDataProviderService
    ) {

    }
}