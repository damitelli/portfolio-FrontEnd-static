import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCircle, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.css']
})
export class BtnDeleteComponent implements OnInit {

  faCircle = faCircle;
  faX = faX;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log()
    this.btnClick.emit();

  }

}
