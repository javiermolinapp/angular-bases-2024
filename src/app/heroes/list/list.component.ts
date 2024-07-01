import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Hero1', 'Hero2', 'Hero3', 'Hero4'];
  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();


  }

}
