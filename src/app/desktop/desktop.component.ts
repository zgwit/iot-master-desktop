import {Component, HostListener, OnInit} from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  entries = [
    {icon: '/assets/icons/link.svg', name:'连接'},
    {icon: '/assets/icons/device.svg', name:'设备'},
    {icon: '/assets/icons/product.svg', name:'产品'},
    {icon: '/assets/icons/project.svg', name:'项目'},
    {icon: '/assets/icons/user.svg', name:'用户'},
    {icon: '/assets/icons/plugin.svg', name:'插件'},
    {icon: '/assets/icons/setting.svg', name:'设置'},
  ]
  cols = 8

  constructor() {
  }

  ngOnInit(): void {
    this.calcWidth()
  }

  calcWidth() {
    //console.log(window)
    const w = window.innerWidth
    if (w < 200) {
      this.cols = 1
    } else if (w < 600) {
      this.cols = 2
    } else if (w < 1000) {
      this.cols = 4
    } else if (w < 1600) {
      this.cols = 8
    } else {
      this.cols = 16
    }
  }

  @HostListener("window:resize", ['$event'])
  onResize(e: any) {
    //console.log('on window width', e.target.innerWidth)
    this.calcWidth()
  }

}
