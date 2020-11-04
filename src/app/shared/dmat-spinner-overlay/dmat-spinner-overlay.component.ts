import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dmat-spinner-overlay',
  templateUrl: './dmat-spinner-overlay.component.html',
  styleUrls: ['./dmat-spinner-overlay.component.css']
})
export class DmatSpinnerOverlayComponent implements OnInit {

  constructor() { }

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  ngOnInit() {

  }

}
