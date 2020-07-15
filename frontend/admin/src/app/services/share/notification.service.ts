import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public showNotificationSuccess(message): void {
    $.notify({
      icon: 'far fa-check-circle',
      message
    }, {
      // settings
      type: 'success'
    });
  }

  public showNotificationDanger(message): void {
    $.notify({
      icon: 'far fa-times-circle',
      message
    }, {
      // settings
      type: 'danger'
    });
  }

  public showNotificationPrimary(message): void {
    $.notify({
      icon: 'far fa-bell',
      message
    }, {
      // settings
      type: 'primary'
    });
  }


}
