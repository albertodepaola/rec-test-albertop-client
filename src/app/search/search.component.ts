import { Component, OnInit } from '@angular/core';
import { TorreUserService } from '../torre-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private torreUserService: TorreUserService) { }

  ngOnInit() {
  }

  searchUsersByName(name: string) {
    // TODO implement search method
  }

}
