import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/api/images.service';
import { environment } from '../../../environments/environment';
declare var $: any;
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  config: any;
  pageSize = 10;
  pageIndex = 1;
  data: any = [];
  urlApi = environment.apiUrl;
  imageUrl;
  imageName;
  path;
  constructor(private imagesService: ImagesService) {
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.pageIndex,
      totalItems: 0
    };
  }

  ngOnInit(): void {
    this.search();
  }

  openConfirm(path, name): void {
    this.imageUrl = this.urlApi + '/' + path;
    this.path = path;
    this.imageName = name;
    $('#confirmDeleteModal').modal('show');
  }

  search(): void {
    const params = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    this.imagesService.getall(params).subscribe((data: any) => {
      console.log(data);
      this.data = data.data || [];
      this.config = {
        itemsPerPage: this.pageSize,
        currentPage: this.pageIndex,
        totalItems: data.pagination?.totalSize || 0
      };
    });
  }

  delete(path: string): void {
    const params = {
      path
    };
    this.imagesService.deleteImage(params).subscribe((data: any) => {
      this.search();
    });
  }

  pageChanged(event): void {
    this.pageIndex = event;
    this.search();
  }

  openCreatePopup(): void {

    $('#createModal').modal('show');
  }

  create(): void {
    console.log('123');
  }

}
