import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="row">
      <nav class="col-xs-6 col-xs-offset-3 navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">{{navigation[0]}} <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{navigation[1]}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">{{navigation[2]}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `,
})
export class HeaderComponent  {
  navigation: string[];

  constructor() {
    this.navigation = ['About Me', 'Projects', 'Contact Me'];
  }
}
