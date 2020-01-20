import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}


//
//
// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class MessageService {
//   messages: string[] = [];
//
//   //i added this because it seemed like a sensible method to have in this class
//   // show(): string {
//   //   return this.messages;
//   // }
//
//
//   add(message: string) {
//     this.messages.push(message);
//   }
//
//   clear() {
//     this.messages = [];
//   }
// }
