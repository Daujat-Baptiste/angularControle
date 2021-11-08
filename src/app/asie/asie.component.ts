import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-asie',
  templateUrl: './asie.component.html',
  styleUrls: ['./asie.component.css'],
  providers: [PaysService]
})
export class AsieComponent {

  public data: any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }


}
