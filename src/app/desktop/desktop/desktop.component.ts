import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

declare var window: any;

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  entries = [
    {icon: '/assets/icons/link.svg', name: '连接', url: '/link', internal: true},
    {icon: '/assets/icons/device.svg', name: '设备', url: '/device', internal: true},
    {icon: '/assets/icons/product.svg', name: '产品', url: '/product', internal: true},
    {icon: '/assets/icons/project.svg', name: '项目', url: '/project', internal: true},
    {icon: '/assets/icons/user.svg', name: '用户', url: '/user', internal: true},
    {icon: '/assets/icons/plugin.svg', name: '插件', url: '/plugin', internal: true},
    {icon: '/assets/icons/setting.svg', name: '设置', url: '/setting', internal: true},
  ]
  cols = 8

  constructor(private route: Router) {
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
      this.cols = 6
    } else {
      this.cols = 8
    }
  }

  @HostListener("window:resize", ['$event'])
  onResize(e: any) {
    //console.log('on window width', e.target.innerWidth)
    this.calcWidth()
  }

  open(entry: any){
    if (entry.internal) {
      this.route.navigateByUrl(entry.url)
    } else {
      //window.location.href = entry.link
      window.open(entry.url)
    }
  }
}
