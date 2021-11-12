import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-listaexpediente',
  templateUrl: './listaexpediente.component.html',
  styleUrls: ['./listaexpediente.component.css']
})
export class HomeListaexpedientesComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

}
