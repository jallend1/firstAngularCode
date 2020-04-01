import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input()
  value: boolean;
  @Output()
  select = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
