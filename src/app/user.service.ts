import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {RequestService} from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any;
  public userSub = new Subject<any>();

  constructor(private rs: RequestService) {
    rs.get('user/me').subscribe(res => {
      this.setUser(res.data);
    }, error => {
      this.userSub.next(undefined)
    })
  }

  setUser(user: any) {
    this.user = user;
    this.userSub.next(user);
  }

  getUser() {
    return this.user;
  }

  subscribe() {
    return this.userSub.subscribe()
  }

}
