import { Component, OnInit } from '@angular/core';
import { TorreUserService } from '../torre-user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name = new FormControl('');
  users: Object;

  constructor(private torreUserService: TorreUserService) { }

  ngOnInit() {
    this.torreUserService.getUserByUsername('albertodepaola').subscribe(data => {
      console.log(data);
    });
  }

  searchUsersByName() {
    this.torreUserService.getUsersByName(this.name.value).subscribe(data => {
      this.users = data;
      console.log(this.users);
    });

  }

  onKeydown(event) {
    console.log(event);
    if (event.key === 'Enter') {
      this.searchUsersByName();
    }
  }

}
