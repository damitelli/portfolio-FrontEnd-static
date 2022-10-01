import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {
  faCircle = faCircle;
  faPlus = faPlus;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
