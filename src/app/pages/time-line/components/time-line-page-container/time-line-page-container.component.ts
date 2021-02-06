import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeLineBaseService } from '../../services/time-line-base.service';
import { TimeLineFilterService } from '../../services/time-line-filter.service';

@Component({
  selector: 'app-time-line-page-container',
  templateUrl: './time-line-page-container.component.html',
  styleUrls: ['./time-line-page-container.component.css']
})
export class TimeLinePageContainerComponent implements OnInit {
  rangeValue;

  constructor(
    public readonly timeLineBaseService: TimeLineBaseService,
    public readonly timeLineFilterService: TimeLineFilterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const filterFromUrl = this.route.snapshot.queryParamMap.get('filter');
    if (filterFromUrl) {
      this.timeLineFilterService.refreshTextValue(filterFromUrl);
    }
  }

  rangeValueChanged(range): void {
    this.rangeValue = range;
  }

}
