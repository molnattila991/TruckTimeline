import { Component, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
import { TimeLineFilterService } from '../../services/time-line-filter.service';

@Component({
  selector: 'app-graph-filter-container',
  templateUrl: './graph-filter-container.component.html',
  styleUrls: ['./graph-filter-container.component.css']
})
export class GraphFilterContainerComponent implements OnDestroy {
  private subs: Subscription = new Subscription();
  private filter$: ReplaySubject<string> = new ReplaySubject();
  constructor(
    public readonly timeLineFilterService: TimeLineFilterService
  ) {
    this.subs.add(
      this.filter$
        .pipe(
          debounce(() => interval(500))
        ).subscribe(
          value => this.timeLineFilterService.refreshTextValue(value)
        )
    );
  }

  rangeValueChanged(range: RangeItem): void {
    this.timeLineFilterService.refreshRangeValue(range);
  }

  filterList(filterText: string): void {
    this.filter$.next(filterText);
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }
}
