import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

// export interface User {
//   postId: string;
//   id: string;
//   name: string;
//   email: string;
//   body: string;
// }

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  Users = [];
  
  constructor(public fetchApiService: FetchApiService) { }

  ngOnInit(): void {
    this.fetchApi();
  }

  fetchApi(){
    this.fetchApiService.getData().subscribe((data:any[]) =>{
      console.log(data);
      this.Users = data;
    })
  }

}
