import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  get isElectronApp(): boolean {
    return !!(window && window.process && window.process.type);
  }

  get ipcRenderer() {
    return ipcRenderer;
  }
  
}