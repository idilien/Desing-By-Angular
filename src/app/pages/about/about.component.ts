import { Component, OnInit } from '@angular/core';
import { InfoPagService } from '../../service/info-pag.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPagService:InfoPagService) { }

  ngOnInit(): void {
  }

}
