import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLinePageContainerComponent } from './components/time-line-page-container/time-line-page-container.component';
import { TimeLinePageViewComponent } from './components/time-line-page-view/time-line-page-view.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TimeLineEffects } from './store/time-line.effects';
import { timeLineReducer } from './store/time-line.reducer';
import { TimeLineBaseService } from './services/time-line-base.service';
import { TimeLineDataProviderService } from './services/time-line-data-provider.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DateTimeRangeSelectorModule } from '../../components/date-time-range-selector/date-time-range-selector.module';
import { GantDiagramWrapperModule } from '../../components/gant-diagram-wrapper/gant-diagram-wrapper.module';
import { TextFilterModule } from '../../components/text-filter/text-filter.module';
import { TimeLineFilterService } from './services/time-line-filter.service';
import { GraphFilterContainerComponent } from './components/graph-filter/graph-filter-container.component';

const routes: Routes = [
  {
    path: '', component: TimeLinePageContainerComponent
  }
];

@NgModule({
  declarations: [
    TimeLinePageContainerComponent,
    TimeLinePageViewComponent,
    GraphFilterContainerComponent
  ],
  imports: [
    CommonModule,

    DateTimeRangeSelectorModule,
    GantDiagramWrapperModule,
    TextFilterModule,

    RouterModule.forChild(routes),
    StoreModule.forFeature("timeLine", timeLineReducer),
    EffectsModule.forFeature([TimeLineEffects]),
    MatSidenavModule,

  ],
  exports: [TimeLinePageContainerComponent],
  providers: [
    TimeLineBaseService,
    TimeLineDataProviderService,
    TimeLineFilterService
  ]
})
export class TimeLineModule {
  constructor(private readonly baseService: TimeLineBaseService) {
    this.baseService.refreshOrderList();
    this.baseService.refreshTruckList();
  }
}
