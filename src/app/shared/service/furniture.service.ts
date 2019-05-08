import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http, Response } from '@angular/http'
import { Furniture } from '../model/furniture.model';


@Injectable()

export class FurnitureService {
  private furnitureList: Furniture[] = []

  constructor(private http: Http) { }

  loadFurniture(cat_id: string): any {
    // return this.http.get(`http://localhost:3000/api/category/${cat_id}/furniture`)
    //   .pipe(map((response: Response) => {
    //     let data = response.json()

    //     for (let elem of data) {
    //       elem.images = elem.images.split(',')
    //     }

    //     this.furnitureList = data
    //     return data
    //   }, (error) => console.log(error)))
    this.http.get(`http://localhost:3000/api/category/${cat_id}/furniture`)
      .subscribe((data: Response) => this.furnitureList = data.json())

    return this.http.get(`http://localhost:3000/api/category/${cat_id}/furniture`)
  }

  getAllFurniture() {
    return this.furnitureList.slice()
  }

  getFurniture(it_id: any) {
    const result = this.furnitureList.find((elem) => {
      return (elem.it_id == it_id)
    })

    return result
  }
}
