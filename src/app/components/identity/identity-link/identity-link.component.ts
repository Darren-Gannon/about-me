import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-identity-link[img][href]',
  templateUrl: './identity-link.component.html',
  styleUrls: ['./identity-link.component.scss']
})
export class IdentityLinkComponent {

  @Input('img') public img!: string;
  @Input('href') public href!: string;
}
