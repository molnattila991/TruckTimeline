import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
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
    public readonly timeLineFilterService: TimeLineFilterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const filterFromUrl = this.route.snapshot.queryParamMap.get('filter');
    if (filterFromUrl) {
      this.timeLineFilterService.refreshTextValue(filterFromUrl);
    }

    const rangeStartFromUrl = this.route.snapshot.queryParamMap.get('start');
    const rangeEndFromUrl = this.route.snapshot.queryParamMap.get('end');
    if (rangeStartFromUrl && rangeEndFromUrl) {
      this.timeLineFilterService.refreshRangeValue(<RangeItem>{
        start: new Date(rangeStartFromUrl),
        end: new Date(rangeEndFromUrl)
      });
    }
  }

  rangeValueChanged(range): void {
    this.rangeValue = range;
  }

}
