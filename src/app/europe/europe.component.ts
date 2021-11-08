import { Component, Input, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css'],
  providers: [PaysService]
})
export class EuropeComponent {
  public data: any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }
}
