import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-chaussure-detail',
  templateUrl: './chaussure-detail.component.html',
  styleUrls: ['./chaussure-detail.component.css']
})
export class ChaussureDetailComponent implements OnInit {
  chaussure: Chaussure;

  constructor(private route: ActivatedRoute, private chaussureService: ChaussureService) { }

  ngOnInit(): void {
    this.chaussureService.getChaussureByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Chaussure) => {
      this.chaussure = data;
    });
  }

}
