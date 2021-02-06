import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeLineBaseService } from '../../services/time-line-base.service';

@Component({
  selector: 'app-time-line-page-container',
  templateUrl: './time-line-page-container.component.html',
  styleUrls: ['./time-line-page-container.component.css']
})
export class TimeLinePageContainerComponent implements OnInit {
  rangeValue;

  constructor(
    public readonly timeLineBaseService: TimeLineBaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const filterFromUrl = this.route.snapshot.queryParamMap.get('filter');
    if (filterFromUrl) {
      this.timeLineBaseService.refreshTextValue(filterFromUrl);
    }
  }

  rangeValueChanged(range): void {
    this.rangeValue = range;
  }

}
