import { ToastyService } from 'ng2-toasty';
import { ErrorHandler, Inject, NgZone } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    constructor(private ngZone: NgZone,
        @Inject(ToastyService)private toastyService: ToastyService) {        
    }
    
    
    handleError(error: any): void {
        this.ngZone.run(() => {
            console.log(error);
            this.toastyService.error({
                title: 'Error',
                msg: error,
                theme: 'bootstrap',
                showClose: true,
                timeout: 5000
              });
        });   
        
        console.log(error);
    }
}