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
  @Output("submit") onSubmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit()
  }

}
