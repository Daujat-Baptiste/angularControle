import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-afrique',
  templateUrl: './afrique.component.html',
  styleUrls: ['./afrique.component.css'],
  providers: [PaysService]
})
export class AfriqueComponent{
   

  public data: any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }


}
