import { Component, OnInit } from '@angular/core';
import { LouageService } from '../louage.service';
import { Louage } from '../louage.interface';

@Component({
  selector: 'app-louages-list',
  templateUrl: './louage-list.component.html',
  styleUrls: ['./louage-list.component.css']
})
export class LouageListComponent implements OnInit {
  louages: Louage[] = [];
  newLouage: Louage = {
    name: '', description: '',
    id: 0
  };

  constructor(private louageService: LouageService) { }

  ngOnInit(): void {
    this.louageService.getAllLouages().subscribe(louages => {
      this.louages = louages;
    });
  }

  createLouage(): void {
    this.louageService.createLouage(this.newLouage).subscribe(() => {
      this.louages.push(this.newLouage);
      this.newLouage = {
        name: '', description: '',
        id: 0
      };
    });
  }

  updateLouage(louage: Louage): void {
    this.louageService.updateLouage(louage).subscribe(() => {
      // Update the louage in the list
      const index = this.louages.indexOf(louage);
      if (index!== -1) {
        this.louages[index] = louage;
      }
    });
  }

  deleteLouage(id: number): void {
    this.louageService.deleteLouage(id).subscribe(() => {
      // Remove the louage from the list
      this.louages = this.louages.filter(louage => louage.id!== id);
    });
  }
}
