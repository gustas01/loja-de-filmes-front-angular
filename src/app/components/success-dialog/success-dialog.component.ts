import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate';
import { ClearCart } from 'src/app/store/actions/shoppingCart.actions';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public msg: string, private router: Router, private store: Store<IState>) { }

  ngOnInit(): void {
  }

}
