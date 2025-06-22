import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private authservice : AuthserviceService, private route : Router){}
logout() {
  this.authservice.logout();
  this.route.navigate(['/login']);
}

}
