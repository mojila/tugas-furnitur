import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/shared/model/furniture.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/category.service';
import { FurnitureService } from 'src/app/shared/service/furniture.service';
import { Category } from 'src/app/shared/model/category.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  categorySelected = "0"

  furnitureList: Furniture[] = []
  categoryList: Category[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorySrv: CategoryService,
    private furnitureSrv: FurnitureService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.categorySelected = params['cat_id']
        this.categorySrv.selectCategory(this.categorySelected)
        this.furnitureList = []
        this.furnitureSrv.loadFurniture(this.categorySelected)
          .subscribe((data: any) => this.furnitureList = data.json())
      })
  }

  viewDetail(it_id) {
    this.router.navigate([it_id], { relativeTo: this.route })
  }
}
