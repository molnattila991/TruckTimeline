import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, ReplaySubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
import { getFormattedDate } from 'src/app/utils/get-formatted-date.function';
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public readonly timeLineFilterService: TimeLineFilterService
  ) {
    this.subs.add(
      this.filter$
        .pipe(
          debounce(() => interval(500))
        ).subscribe(
          value => {
            this.refreshUrl({ 'filter': value })
            this.timeLineFilterService.refreshTextValue(value)
          }
        )
    );
  }

  rangeValueChanged(range: RangeItem): void {
    try {
      this.refreshUrl({ 'start': getFormattedDate(range.start), 'end': getFormattedDate(range.end) })
      this.timeLineFilterService.refreshRangeValue(range);
    } catch (err) {
      alert("Selected dates are not valid...");
    }
  }

  filterList(filterText: string): void {
    this.filter$.next(filterText);
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  refreshUrl(queryParams: Params): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
  }
}
