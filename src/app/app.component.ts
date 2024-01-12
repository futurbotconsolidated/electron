import { Component } from '@angular/core';
import { ElectronService } from 'src/core/electron/electron.service';
// const { shell } = require('electron');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxangular';

  constructor( private electronService: ElectronService) {
  }

  openExternalApp() {
    if (this.electronService.isElectronApp) {
      this.electronService.ipcRenderer.send('open-external-app');
    }
  }
}
