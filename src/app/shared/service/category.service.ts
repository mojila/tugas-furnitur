import { Injectable, EventEmitter } from '@angular/core';
import { Category } from '../model/category.model';
import { map } from 'rxjs/operators'
import { Http, Response } from '@angular/http'

@Injectable()

export class CategoryService {
  categoryUpdated = new EventEmitter<Category>();

  categoryList: Category[] = []

  constructor(private http: Http) { }

  loadCategories(): any {
    this.http.get(`http://localhost:3000/api/category`)
      .subscribe((data: Response) => this.categoryList = data.json())

    return this.http.get(`http://localhost:3000/api/category`)
  }

  getCategories() {
    return this.categoryList.slice()
  }

  selectCategory(cat_id: string) {
    const result = this.categoryList.find((elem) => {
      return (elem.cat_id == cat_id)
    })

    if (result != undefined) {
      this.categoryUpdated.emit(result)
    }

    return result
  }
}
