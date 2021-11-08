import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-amerique',
  templateUrl: './amerique.component.html',
  styleUrls: ['./amerique.component.css'],
  providers: [PaysService]
})
export class AmeriqueComponent {

  
  public data: any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }

}
