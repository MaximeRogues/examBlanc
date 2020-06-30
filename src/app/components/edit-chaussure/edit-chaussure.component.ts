import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { Router, ActivatedRoute } from '@angular/router';
import { ChaussureService } from 'src/app/services/chaussure.service';

@Component({
  selector: 'app-edit-chaussure',
  templateUrl: './edit-chaussure.component.html',
  styleUrls: ['./edit-chaussure.component.css']
})
export class EditChaussureComponent implements OnInit {
  id: number;
  chaussure: Chaussure;


  constructor(private route: ActivatedRoute, private router: Router, private chaussureService: ChaussureService) { }

  ngOnInit(): void {
    this.chaussureService.getChaussureByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.chaussure = data;
    });
  } 

  editChaussure() {
    //lance la fonction editChaussure de Chaussure.service
    this.chaussureService.editChaussure(this.chaussure).subscribe(then => {
     // change l'url avec la route '/Chaussure'
     this.router.navigate(['/chaussure']);
     });
   }
}
