import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyright 2020 <b><a href="#" target="_blank">iZeno Pte. Ltd.</a></b> | All Rights Reserved</span>
  `,
})
export class FooterComponent {
}
