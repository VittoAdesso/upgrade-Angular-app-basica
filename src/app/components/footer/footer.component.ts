import { Component, OnInit } from '@angular/core';
import { Ifooter } from './model/Ifooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerContent : Ifooter; 

  constructor() { 

    this.footerContent = {

      created: {
        title : 'Vittorio Adesso'
      }
    }
  }

  ngOnInit(): void {
  }

}
