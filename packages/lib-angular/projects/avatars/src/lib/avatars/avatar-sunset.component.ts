import { Component, Input } from "@angular/core";

import { generateColors, SIZE } from "./avatar-sunset.utils";

@Component({
  selector: "avatar-sunset, AvatarSunset",
  template: `
    <svg
      [attr.fill]="'none'"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]='"0 0 " + SIZE + " " + SIZE'
      [attr.width]="size"
      [attr.height]="size"
    >
      <ng-container *ngIf="title">
        <title>{{name}}</title>
      </ng-container>

      <mask
        id="mask__sunset"
        maskUnits="userSpaceOnUse"
        [attr.x]="0"
        [attr.y]="0"
        [attr.width]="SIZE"
        [attr.height]="SIZE"
      >
        <rect
          [attr.fill]="'#FFFFFF'"
          [attr.width]="SIZE"
          [attr.height]="SIZE"
          [attr.rx]="square ? undefined : SIZE * 2"
        ></rect>
      </mask>

      <g mask="url(#mask__sunset)">
        <path
          d="M0 0h80v40H0z"
          [attr.fill]='"url(#gradient_paint0_linear_" + formattedName + ")"'
        ></path>

        <path
          d="M0 40h80v40H0z"
          [attr.fill]='"url(#gradient_paint1_linear_" + formattedName + ")"'
        ></path>
      </g>

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          [id]='"gradient_paint0_linear_" + formattedName'
          [attr.x1]="SIZE / 2"
          [attr.y1]="0"
          [attr.x2]="SIZE / 2"
          [attr.y2]="SIZE / 2"
        >
          <stop [attr.stop-color]="sunsetColors[0]"></stop>

          <stop [attr.offset]="1" [attr.stop-color]="sunsetColors[1]"></stop>
        </linearGradient>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          [id]='"gradient_paint1_linear_" + formattedName'
          [attr.x1]="SIZE / 2"
          [attr.y1]="SIZE / 2"
          [attr.x2]="SIZE / 2"
          [attr.y2]="SIZE"
        >
          <stop [attr.stop-color]="sunsetColors[2]"></stop>

          <stop [attr.offset]="1" [attr.stop-color]="sunsetColors[3]"></stop>
        </linearGradient>
      </defs>
    </svg>
  `,
})
export default class AvatarSunset {
  SIZE = SIZE;

  @Input() name: any;
  @Input() colors: any;
  @Input() size: any;
  @Input() title: any;
  @Input() square: any;

  get formattedName() {
    return this.name.replace(/\s/g, "");
  }
  get sunsetColors() {
    return generateColors(this.name, this.colors);
  }
}
