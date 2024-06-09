import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

@Input() title: string = ""
@Input() primaryBtnText: string = ""
@Input() secondaryBtnText: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
