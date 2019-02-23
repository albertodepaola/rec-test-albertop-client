import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TorreUserService } from '../torre-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string;
  user: Object;

  constructor(private route: ActivatedRoute, private torreUserService: TorreUserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.torreUserService.getUserByUsername(this.username).subscribe(data => {
        this.user = data;
        console.log(this.user);
      });
    });
  }

}
