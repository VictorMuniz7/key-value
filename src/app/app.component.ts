import { Component } from '@angular/core';

interface KeyHistory {
  pressedKey: string;
  charCode: number;
  altKey: boolean;
  metaKey: boolean;
  controlKey: boolean;
  shiftKey: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'key-value';

  keysHistory: KeyHistory[] = [];

  onKeyDown(event: KeyboardEvent): void {

    const pressedKey: string = event.key;
    const charCode: number = event.key.charCodeAt(0);
    const altKey: boolean = event.altKey;
    const metaKey: boolean = event.metaKey;
    const controlKey: boolean = event.ctrlKey;
    const shiftKey: boolean = event.shiftKey;

    this.keysHistory.unshift({
      pressedKey,
      charCode,
      altKey,
      metaKey,
      controlKey,
      shiftKey
    });

  }
}
