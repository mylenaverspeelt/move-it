import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

@Input() title: string = ""
@Input() primaryBtnText: string = ""
@Input() secondaryBtnText: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
