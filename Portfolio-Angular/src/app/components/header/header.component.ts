import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
