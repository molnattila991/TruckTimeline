import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { RangeItem } from '../range-item.interface';

@Component({
  selector: 'app-date-time-range-selector',
  templateUrl: './date-time-range-selector.component.html',
  styleUrls: ['./date-time-range-selector.component.css']
})
export class DateTimeRangeSelectorComponent implements OnInit, OnDestroy {
  range: FormGroup;
  @Input() defaultValue: RangeItem;

  @Output() rangeValueChanged: EventEmitter<RangeItem> = new EventEmitter();
  private subs: Subscription = new Subscription();
  constructor() { }
  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }

  ngOnInit(): void {
    if (this.defaultValue && this.defaultValue.end && this.defaultValue.start) {
      this.range = new FormGroup({
        start: new FormControl(this.defaultValue.start),
        end: new FormControl(this.defaultValue.end)
      });
    } else {
      this.range = new FormGroup({
        start: new FormControl(),
        end: new FormControl()
      });
    }

    this.subs.add(
      this.range.valueChanges
        .pipe(debounce(() => interval(200)))
        .subscribe(
          (value) => this.rangeValueChanged.emit(<RangeItem>{
            start: value.start,
            end: value.end
          })
        )
    );
  }
}
