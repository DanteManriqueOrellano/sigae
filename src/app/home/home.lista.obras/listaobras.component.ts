import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { observable } from 'rxjs';
import { LoadingService } from 'src/app/core/globalservice/LoadingService';
import { ObraService } from 'src/app/core/globalservice/obra.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-listaobras',
  templateUrl: './listaobras.component.html',
  styleUrls: ['./listaobras.component.scss']
})
export class HomeListaobrasComponent{
 
  loading = false;

  constructor(private router:Router,private route:ActivatedRoute) { 
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (ev instanceof NavigationEnd || ev instanceof NavigationCancel || ev instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

 


}
