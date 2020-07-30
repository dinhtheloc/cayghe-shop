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
  idUpdate;
  dataImages = [];
  selectedImage = [];
  isInitSelect2 = false;
  isInitSelect2Update = false;

  createForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    alias: new FormControl(null),
    linkShopee: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    arrayImage: new FormControl([]),
    inventory: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    available: new FormControl(false)
  });

  updateForm = new FormGroup({
    name: new FormControl(null),
    alias: new FormControl(null),
    linkShopee: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    arrayImage: new FormControl([]),
    inventory: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
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

      setTimeout(() => {
        $('#select2Images').val('').trigger('change');
      }, 200);


      if (!this.isInitSelect2) {
        this.isInitSelect2 = true;
        setTimeout(() => {
          this.initSelect2();
        }, 200);
      }
    });

    $('#updateModal').on('show.bs.modal', (event) => {

      if (!this.isInitSelect2Update) {
        this.isInitSelect2Update = true;
        setTimeout(() => {
          this.initSelect2Update();
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
    });
  }

  get f(): any { return this.createForm.controls; }
  get fu(): any { return this.updateForm.controls; }

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
    this.submitted = false;
    this.selectedImage = [];
    $('#createModal').modal('show');
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

  initSelect2Update(): void {
    $('#select2ImagesUpdate').on('change', (e) => {
      this.selectedImage = $('#select2ImagesUpdate').select2('data') || [];
      console.log(this.selectedImage);
    });

    const templateResult = (state) => {
      const $state = $(
        `<span><img style="width: 50px;margin-right: 10px;" src="${state.path}" class="img-flag" />${state.name}</span>`
      );
      return $state;
    };

    const data = this.dataImages;
    $('#select2ImagesUpdate').select2({
      data,
      templateResult,
      maximumSelectionLength: 4
    });
  }

  changeToSlug = (name: string) => {
    // Đổi chữ hoa thành chữ thường
    let slug = name.toLowerCase().trim();
    // Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    // Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    // Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    // Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    // Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    // Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    // In slug ra textbox có id “slug”
    return slug;
  }

  nameChanged(): void {
    const slug = this.changeToSlug(this.f.name.value);
    this.createForm.patchValue({
      alias: slug
    });
  }


  makeArrayImages(): Array<any> {
    const result = [];
    if (this.selectedImage) {
      this.selectedImage.map(i => {
        const { path, name } = i;
        result.push({
          path,
          name
        });
      });
    }

    return result;
  }

  create(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createForm.invalid) {
      return;
    }

    const data = {
      name: this.f.name.value,
      price: this.f.price.value,
      images: this.makeArrayImages(),
      inventory: this.f.inventory.value,
      description: this.f.description.value,
      linkShopee: this.f.linkShopee.value,
      available: this.f.available.value
    };

    this.productsService.create(data).subscribe(
      resp => {
        this.notificationService.showNotificationSuccess('Tạo mới sản phẩm thành công');
        this.search();
        $('#createModal').modal('hide');
      },
      error => {
        this.notificationService.showNotificationDanger(error);
      });
  }

  openUpdatePopup(product: any): void {
    this.submitted = false;
    $('#updateModal').modal('show');
    const {
      name,
      alias,
      linkShopee,
      price,
      inventory,
      description,
      available,
      images
    } = product;
    this.updateForm.patchValue({
      name,
      alias,
      linkShopee,
      price,
      inventory,
      description,
      available
    });
    this.idUpdate = product._id;

    setTimeout(() => {
      $('#select2ImagesUpdate').val('').trigger('change');
    }, 200);

    if (images) {
      const result = [];
      images.map(i => {
        const found = this.dataImages.find(element => element.path === i.path);
        if (found) {
          result.push(found.id);
        }
      });
      setTimeout(() => {
        $('#select2ImagesUpdate').val(result);
        $('#select2ImagesUpdate').trigger('change');
      }, 200);

    }
  }

  update(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    const data = {
      id: this.idUpdate,
      price: this.fu.price.value,
      images: this.makeArrayImages(),
      inventory: this.fu.inventory.value,
      description: this.fu.description.value,
      linkShopee: this.fu.linkShopee.value,
      available: this.fu.available.value
    };

    this.productsService.update(data).subscribe(
      resp => {
        this.notificationService.showNotificationSuccess('Cập nhật sản phẩm thành công');
        this.search();
        $('#updateModal').modal('hide');
      },
      error => {
        this.notificationService.showNotificationDanger(error);
      });
  }
}
