import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';


@Injectable({
  providedIn: 'root'
})

export class DeviceConfigService {

  private deviceSubject = new BehaviorSubject<DeviceType>(this.getDeviceType());
  device$ = this.deviceSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.deviceSubject.next(this.getDeviceType());
    });
  }

  private getDeviceType(): DeviceType {
    const width = window.innerWidth;
    if (width < 768) {
      return 'mobile';
    } else if (width >= 768 && width < 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  get currentDevice(): DeviceType {
    return this.deviceSubject.value;
  }

  isMobile() { return this.currentDevice === 'mobile'; }
  isTablet() { return this.currentDevice === 'tablet'; }
  isDesktop() { return this.currentDevice === 'desktop'; }

  }
