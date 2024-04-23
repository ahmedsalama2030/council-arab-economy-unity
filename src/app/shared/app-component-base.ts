import { Injector } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { ToastrService } from 'ngx-toastr'

export abstract class AppComponentBase {
  translate: TranslateService
  _toastr: ToastrService

  get isDirRTL() {
    return this.translate.currentLang == 'ar'
  }

  constructor(injector: Injector) {
    this.translate = injector.get(TranslateService)
    this._toastr = injector.get(ToastrService)
  }

  //--------------------- Notify-------------------
  showError(message?: any, title?: any, option?: any) {
    // if (message)
    //     this._toastr.error(message)
    // if (message && title)
    //     this._toastr.error(message, title)
    // if (message && title && option)
    this._toastr.error(message, title, option)
  }

  showSuccess(message?: any, title?: any, option?: any) {
    if (!message) message = this.l('success-message')

    this._toastr.success(message, title, option)
  }

  showWarning() { }

  //-----------------------localization-------------
  l(key: any, values?: any) {
    return this.translate.instant(key, values)
  }

  handleError(error: any) {

    if (error['error']) this.showError(this.isDirRTL ? error['error'].messageAr : error['error'].messageEn, 'Assign Error', { positionClass: 'toast-top-right' })
    else this.showError(error.message, 'Assign Error')
  }
}
