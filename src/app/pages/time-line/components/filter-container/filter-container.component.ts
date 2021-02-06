import { Component, OnDestroy } from '@angular/core';
import { Subscription, ReplaySubject, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { TimeLineBaseService } from '../../services/time-line-base.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnDestroy {
  private subs: Subscription = new Subscription();
  private filter$: ReplaySubject<string> = new ReplaySubject();
  constructor(private readonly service: TimeLineBaseService) {
    this.subs.add(
      this.filter$
        .pipe(
          debounce(() => interval(500))
        ).subscribe(
          value => this.service.refreshTextValue(value)
        )
    );
  }
  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  filterList(filterText: string): void {
    this.filter$.next(filterText);
  }
}
