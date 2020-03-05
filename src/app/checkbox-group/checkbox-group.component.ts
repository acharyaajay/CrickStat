import { Component, OnInit, Input } from '@angular/core';
import { CheckboxItem } from './CheckboxItem';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options = Array<CheckboxItem>();
  constructor() { }

  ngOnInit() {
  }

}

