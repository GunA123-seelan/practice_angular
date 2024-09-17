import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,MainComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isOpen:boolean=false;
  menuSelect(){
    this.isOpen=!this.isOpen;
  }
}
