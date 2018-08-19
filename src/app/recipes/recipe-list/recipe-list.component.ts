import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test1', 'This is a test1', 'https://www.athlingual.jp/img/character/read.png'),
    new Recipe('Test2', 'This is a test2', 'https://www.athlingual.jp/img/character/write.png'),
    new Recipe('Test3', 'This is a test3', 'https://www.athlingual.jp/img/character/listen.png'),
    new Recipe('Test4', 'This is a test4', 'https://www.athlingual.jp/img/character/speak.png'),
    new Recipe('Test5', 'This is a test5', 'https://www.athlingual.jp/img/character/grammar.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
