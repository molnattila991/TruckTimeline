import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RangeItem } from 'src/app/components/date-time-range-selector/range-item.interface';
import { TimeLineBaseService } from '../../services/time-line-base.service';
import { TimeLineFilterService } from '../../services/time-line-filter.service';
import { isValidDate } from '../../../../utils/date-is-valid.function';

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
      try {
        const range: RangeItem = <RangeItem>{
          start: new Date(rangeStartFromUrl),
          end: new Date(rangeEndFromUrl)
        }

        if (isValidDate(range.end) == false)
          alert("End date in URL is not valid...");
        if (isValidDate(range.start) == false)
          alert("Start date in URL is not valid...");

        this.timeLineFilterService.refreshRangeValue(range);
      } catch (err) {
        alert("Query params are not valid...")
      }
    }
  }

  rangeValueChanged(range): void {
    this.rangeValue = range;
  }

}
