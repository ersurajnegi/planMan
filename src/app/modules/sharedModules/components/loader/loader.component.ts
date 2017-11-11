import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cockpit-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
