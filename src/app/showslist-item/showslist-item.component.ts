import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from 'src/assets/model/show.model'

@Component({
  selector: 'app-showslist-item',
  templateUrl: './showslist-item.component.html',
  styleUrls: ['./showslist-item.component.scss']
})
export class ShowslistItemComponent implements OnInit {

  @Input()
  show: Show;

  @Output()
  favorite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
