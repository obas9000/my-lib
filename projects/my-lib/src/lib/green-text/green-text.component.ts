import { Component, Input } from '@angular/core';

@Component({
  selector: "lib-green-text",
  templateUrl: "green-text.component.html",
  styleUrls: ["green-text.component.scss"],
})
export class GreenTextComponent {
  /**
   * The content text
   */
  @Input() text = "";
}
