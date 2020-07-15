import { Component, Input, OnInit } from '@angular/core';
import { PaginationControlsDirective } from 'ngx-pagination';
import { ProductsService } from '../../services/api/products.service';
import {NotificationService} from '../../services/share/notification.service';
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
  constructor(private productsService: ProductsService, private notificationService: NotificationService) {
    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.pageIndex,
      totalItems: 0
    };
  }

  ngOnInit(): void {
    this.search();
  }


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
  }

  create(): void {

  }
}
