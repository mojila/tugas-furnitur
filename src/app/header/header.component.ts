import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/service/category.service';
import { Category } from '../shared/model/category.model';
import { Response } from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  categoryList: Category [] = [];

  constructor(private categorySrv: CategoryService) { }

  ngOnInit() {
    this.categorySrv.loadCategories()
      .subscribe((data: Response) => this.categoryList = data.json())
  }

}
