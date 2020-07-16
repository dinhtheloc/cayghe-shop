import { Component, Input, OnInit } from '@angular/core';
import { PaginationControlsDirective } from 'ngx-pagination';
import { environment } from '../../../environments/environment';
import { ImagesService } from '../../services/api/images.service';
import { ProductsService } from '../../services/api/products.service';
import { NotificationService } from '../../services/share/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('paginationData') p: PaginationControlsDirective;
  config: any;
  pageSize = 10;
  pageIndex = 1;
  data: any = [];
  idDelete;
  nameDelete;
  dataImages = [];
  selectedImage = [];
  isInitSelect2 = false;

  createForm = new FormGroup({
    name: new FormControl('', Validators.required),
    alias: new FormControl(''),
    price: new FormControl(0, Validators.required),
    arrayImage: new FormControl([]),
    inventory: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    available: new FormControl(false)
  });
  submitted = false;

  constructor(
    private productsService: ProductsService,
    private notificationService: NotificationService,
    private imagesService: ImagesService) {
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.pageIndex,
      totalItems: 0
    };
  }

  ngOnInit(): void {
    this.getDataImageForInput();
    this.search();

    $('#createModal').on('show.bs.modal', (event) => {
      if (!this.isInitSelect2) {
        this.isInitSelect2 = true;
        setTimeout(() => {
          this.initSelect2();
        }, 200);
      }
    });
  }

  getDataImageForInput(): void {
    this.imagesService.getallNotPagination().subscribe((resp: any) => {
      this.dataImages = resp.data;
      if (resp.data) {
        resp.data.map((i: any) => {
          i.id = i._id;
          i.text = i.name;
          i.path = environment.apiUrl + '/' + i.path;
        });
      }
      console.log('dataImages', resp.data);
    });
  }

  get f(): any { return this.createForm.controls; }

  search(): void {
    const params = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    this.productsService.getall(params).subscribe((data: any) => {
      console.log(data);
      this.data = data.data || [];
      this.config = {
        itemsPerPage: this.pageSize,
        currentPage: this.pageIndex,
        totalItems: data.pagination?.totalSize || 0
      };
    });
  }

  openConfirm(id, name): void {
    this.idDelete = id;
    this.nameDelete = name;
    $('#confirmDeleteModal').modal('show');
  }

  pageChanged(event): void {
    this.config.currentPage = event;
  }

  delete(): void {
    this.productsService.deleteProduct(this.idDelete).subscribe((data: any) => {
      this.notificationService.showNotificationSuccess('Xoá sản phẩm thành công!');
      this.search();
      $('#confirmDeleteModal').modal('hide');
    });
  }

  openCreatePopup(): void {
    $('#createModal').modal('show');
    $('#select2Images').val('').trigger('change');
  }

  initSelect2(): void {

    $('#select2Images').on('change', (e) => {
      this.selectedImage = $('#select2Images').select2('data') || [];
      console.log(this.selectedImage);
    });

    const templateResult = (state) => {
      const $state = $(
        `<span><img style="width: 50px;margin-right: 10px;" src="${state.path}" class="img-flag" />${state.name}</span>`
      );
      return $state;
    };

    const data = this.dataImages;
    $('#select2Images').select2({
      data,
      templateResult,
      maximumSelectionLength: 4
    });
  }

  create(): void {
    this.submitted = true;
    // stop here if form is invalid
    console.log(1234);
    console.log(this.createForm);
    if (this.createForm.invalid) {
      return;
    }
    
  }
}
