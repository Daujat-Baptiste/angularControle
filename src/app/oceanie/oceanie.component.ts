import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';
@Component({
  selector: 'app-oceanie',
  templateUrl: './oceanie.component.html',
  styleUrls: ['./oceanie.component.css'],
  providers: [PaysService]
})
export class OceanieComponent {
   
  public data: any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }

}
