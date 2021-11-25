
import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-editcantidaddespachohelp',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="mat-subheading-2">agrega cantidad</div>
      
      <mat-form-field>
        <input matInput maxLength="3" name="cantidad" [(ngModel)]="cantidad">
        <mat-hint align="end">{{cantidad !== 0}}</mat-hint>
      </mat-form-field>

      <div class="actions">
        <button mat-button type="button" color="primary" (click)="onCancel()">CANCEL</button>
        <button mat-button type="submit" color="primary">SAVE</button>
      </div>
    </form>
  `,
  styleUrls: ['./editcantidaddespachohelp.component.scss']
})
export class EditcantidaddespachohelpComponent implements OnInit {

  /** Overrides the comment and provides a reset value when changes are cancelled. */
  @Input()
  get value(): number { return this._value; }
  set value(x: number) {
    this.cantidad = this._value = x;
  }
  private _value = 0;

  /** Form model for the input. */
  cantidad = 0;

  constructor(@Optional() @Host() public popover: SatPopover) { }

  ngOnInit() {
    // subscribe to cancellations and reset form value
    if (this.popover) {
      this.popover.closed.pipe(filter(val => val == null))
        .subscribe(() => this.cantidad = this.value || 0);
    }
  }

  onSubmit() {
    if (this.popover) {
      this.popover.close(this.cantidad);
    }
  }

  onCancel() {
    if (this.popover) {
      this.popover.close();
    }
  }

}
