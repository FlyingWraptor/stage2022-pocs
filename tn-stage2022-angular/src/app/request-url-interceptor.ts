import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class RequestUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Original request: ', req);
    const newRequest = req.clone({ url: req.url.replace(/localhost/g, '127.0.0.1') });
    console.log('New request: ', newRequest);

    return next.handle(newRequest);
  }
}
