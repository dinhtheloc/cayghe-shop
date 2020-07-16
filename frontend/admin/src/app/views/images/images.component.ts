import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/api/images.service';
import { environment } from '../../../environments/environment';
import {NotificationService} from '../../services/share/notification.service';
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
  name = '';
  path;
  fileUpload: any = 'assets/images/image_placeholder.jpg';
  file: any;
  constructor(
    private imagesService: ImagesService, private notificationService: NotificationService) {
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
      pageSize: this.pageSize,
      name: this.name
    };
    console.log(params);
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
      this.notificationService.showNotificationSuccess('Xoá hình ảnh thành công!');
      this.search();
      $('#confirmDeleteModal').modal('hide');
    });
  }

  pageChanged(event): void {
    this.pageIndex = event;
    this.search();
  }

  openCreatePopup(): void {
    this.file = null;
    this.fileUpload = 'assets/images/image_placeholder.jpg';
    $('#createModal').modal('show');
  }

  create(): void {
    if (this.file) {
      this.imagesService.upload(this.file).subscribe((data: any) => {
        this.search();
        this.notificationService.showNotificationSuccess('Upload hình ảnh thành công!');
        $('#createModal').modal('hide');
      });
    }
  }

  onSelectFile(event): void { // called each time file input changes
    if (event.target.files && event.target.files[0]) {

      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.fileUpload = event.target.result;
      };
    }
  }

}
