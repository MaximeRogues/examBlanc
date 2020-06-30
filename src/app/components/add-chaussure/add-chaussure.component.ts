import { Component, OnInit } from '@angular/core';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router } from '@angular/router';
import { Chaussure } from 'src/app/models/chaussure';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {
  chaussure: Chaussure;

  constructor(private chaussureService: ChaussureService, private router: Router) { }

  ngOnInit(): void {
    this.chaussure = new Chaussure();    

  }

  submitChaussure() {
    this.chaussureService.addChaussure(this.chaussure).subscribe(then => {
      this.router.navigate(['/chaussure'])
    })
  }

}
