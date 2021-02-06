import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-filter-view',
  templateUrl: './text-filter-view.component.html',
  styleUrls: ['./text-filter-view.component.css']
})
export class TextFilterViewComponent implements OnInit, OnDestroy {
  filterText = new FormControl('');
  sub: Subscription = new Subscription();
  @Input() defaultValue: string = "";
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }

  ngOnInit(): void {
    if (this.defaultValue) {
      this.filterText.setValue(this.defaultValue, { emitEvent: false });
    }

    this.sub.add(
      this.filterText.valueChanges.subscribe(value => this.valueChanged.emit(value))
    );
  }
}