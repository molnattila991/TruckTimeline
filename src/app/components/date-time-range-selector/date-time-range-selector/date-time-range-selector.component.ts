import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-date-time-range-selector',
  templateUrl: './date-time-range-selector.component.html',
  styleUrls: ['./date-time-range-selector.component.css']
})
export class DateTimeRangeSelectorComponent implements OnInit, OnDestroy {
  range: FormGroup;
  @Output() rangeValueChanged: EventEmitter<any> = new EventEmitter();
  private subs: Subscription = new Subscription();
  constructor() {
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }
  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.range.valueChanges
        .pipe(debounce(() => interval(200)))
        .subscribe(
          (value) => this.rangeValueChanged.emit(value)
        )
    );
  }

}
