import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { IInsumoCantidadDespachoModel } from 'src/app/core/globalservice/ejecucion.obra/models/insumo.models';

export class DataSourceDialog extends DataSource<any> {

    private dataSubject = new BehaviorSubject<IInsumoCantidadDespachoModel[]>([]);
  
    data() {
      return this.dataSubject.value;
    }
  
    update(data:any) {
      
      this.dataSubject.next(data);
    }
  
    constructor(data: any[]) {
      super();
      this.dataSubject.next(data);
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<IInsumoCantidadDespachoModel[]> {
      return this.dataSubject;
    }
  
    disconnect() {}
  }