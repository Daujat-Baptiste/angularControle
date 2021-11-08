import { Component, OnInit } from '@angular/core';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html',
  styleUrls: ['./liste-pays.component.css']
})
export class ListePaysComponent {
  public data:any = []
  constructor(private pays: PaysService) {
    this.pays.getData().subscribe(data =>
      this.data = data
    )
  }
  


}
