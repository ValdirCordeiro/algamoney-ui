import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lacamentos-grid.component.html',
  styleUrls: ['./lacamentos-grid.component.css']
})
export class LacamentosGridComponent  {

  @Input() lancamentos = [];

}
