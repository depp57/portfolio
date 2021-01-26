import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class EmailMeService {

  constructor(private httpClient: HttpClient) {}

  sendEmail(email: string, message: string, name: string): Promise<JSON> {
    const key = 'd6qw1d6qw0f4qefq1d6h4789g1j698l4h1w6r8j4';
    const jsonEncode = (email1: string, message1: string, name1: string) => {
      return JSON.stringify({
        key,
        email: {email: email1, message: message1, name: name1}
      });
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };

    return this.httpClient.post<JSON>('https://sachathommet.fr/backend/mailApi.php',
      jsonEncode(email, message, name), httpOptions)
      .toPromise();
  }

  hasAlreadySentEmail(): boolean {
    const getCookie = (name: string) => {
      const cookies = document.cookie;
      return cookies.split(`; ${name}=`).pop();
    };
    const setCookie = (name: string) => {
      const today = new Date();
      today.setTime(today.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = `${name}=47;expires=${today.toUTCString()};`;
    };

    if (getCookie('webagent') !== 'webagent=47') { // I choose 'webagent=47' cause I don't want users to easily identify this cookie
      setCookie('webagent');
      return false;
    }
    return true;
  }
}
