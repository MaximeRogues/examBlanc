import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';

@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {

  listeChaussures: Chaussure[];

  constructor(private chaussureService: ChaussureService) { }

  ngOnInit(): void {

    this.chaussureService.getAllChaussures().subscribe((data: Chaussure[]) => {
      this.listeChaussures = data;
    })
    
  }

  deleteChaussure(id: number) {
    const nomchaussure = this.listeChaussures.find(chaussure => chaussure.id === id).nom
    this.chaussureService.deleteChaussure(id).subscribe(then => {
      this.chaussureService.getAllChaussures().subscribe((data: Chaussure []) => {
        this.listeChaussures = data;
      })
    });

    
  }
  
}
