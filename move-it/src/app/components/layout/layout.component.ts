import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() title: string = ""
  @Input() primaryBtnText: string = ""
  @Input() secondaryBtnText: string = ""
  @Input() disablePrimaryBtn: boolean = true
  @Output("submit") onSubmit = new EventEmitter()
  @Output("navigate") onNavigate = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit()
  }

  navigate() {
    this.onNavigate.emit()
  } 

}
