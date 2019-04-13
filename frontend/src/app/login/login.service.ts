import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const FB:any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
  	FB.init({
      appId      : 'app-id',
      status     : false, // the SDK will attempt to get info about the current user immediately after init
      cookie     : false,  // enable cookies to allow the server to access
      // the session
      xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version    : 'v2.8' // use graph api version 2.5
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
        if (result.authResponse) {
          return this.http.post('http://localhost:3000/facebook/login', {access_token: result.authResponse.accessToken})
              .toPromise()
              .then(response => {
                
                resolve(response);
              })
              .catch(() => reject());
        } else {
          reject();
        }
      }, {scope: 'public_profile,email'})
    });
  }
}
