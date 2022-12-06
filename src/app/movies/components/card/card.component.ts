import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public name!: string
  @Input() public genre!: string
  @Input() public release!: string
  @Input() public stars!: number

  constructor() { }

  ngOnInit(): void {
  }



}
