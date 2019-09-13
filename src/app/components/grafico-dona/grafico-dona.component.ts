import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartData: number[] = [350, 450, 100];
  @Input() doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
