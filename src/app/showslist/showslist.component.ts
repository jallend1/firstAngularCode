import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-showslist',
  templateUrl: './showslist.component.html',
  styleUrls: ['./showslist.component.scss']
})
export class ShowslistComponent implements OnInit {
  shows$: this.showsService.getShows();
  
  constructor(private showsService: ShowsService){
  }

  ngOnInit(): void {
  }

  toggleFavorite(id, isFavorite) {
    this.showsService.toggleFavoriteShow(id, isFavorite).subscribe();
  }
}
