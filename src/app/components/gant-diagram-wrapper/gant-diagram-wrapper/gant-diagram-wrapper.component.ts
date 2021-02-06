import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { GantDiagramData } from '../gant-diagram-data.interface';

@Component({
  selector: 'app-gant-diagram-wrapper',
  templateUrl: './gant-diagram-wrapper.component.html',
  styleUrls: ['./gant-diagram-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GantDiagramWrapperComponent implements OnInit, OnChanges {
  @Input() data: GantDiagramData[] = [];
  @Input() range: { start: Date, end: Date } = { start: new Date("2020-01-01"), end: new Date("2020-03-01") };
  private chart: am4charts.XYChart;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const value = changes && changes["data"] && changes["data"].currentValue ? changes["data"].currentValue : undefined;
    if (value) {
      if (this.range) {
        this.createChart(<GantDiagramData[]>value, this.range);
      } else {
        this.createChart(<GantDiagramData[]>value, { start: new Date("2020-01-01"), end: new Date("2020-03-01") });
      }
    }

    const rangeValue = changes && changes["range"] && changes["range"].currentValue ? changes["range"].currentValue : undefined;
    if (rangeValue) {
      this.createChart(this.data, rangeValue);
    }
  }

  ngOnInit(): void {

  }

  createChart(data: GantDiagramData[], range?: { start: Date, end: Date }) {
    am4core.useTheme(am4themes_animated);

    if (this.chart) {
      this.chart.dispose();
    }

    this.chart = am4core.create("truck-time-line-chartdiv", am4charts.XYChart);
    this.chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    this.chart.paddingRight = 30;
    this.chart.dateFormatter.inputDateFormat = "yyyy.MM.dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    this.chart.data = data;

    let categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = "yyyy-MM-dd HH:mm";
    // dateAxis.renderer.minGridDistance = 70;
    
    dateAxis.baseInterval = { count: 4, timeUnit: "hour" };
    dateAxis.min = range.start.getTime();
    dateAxis.max = range.end.getTime();
    // dateAxis.min = new Date(2020, 0, 1, 24, 0, 0, 0).getTime();
    // dateAxis.max = new Date(2021, 0, 1, 24, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = this.chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText = "{name}: {openDateX} - {dateX}";

    series1.dataFields.openDateX = "fromDate";
    series1.dataFields.dateX = "toDate";
    series1.dataFields.categoryY = "name";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;
    series1.showOnInit = false;

    this.chart.scrollbarX = new am4core.Scrollbar();
    this.chart.scrollbarY = new am4core.Scrollbar();
    
  }
}
