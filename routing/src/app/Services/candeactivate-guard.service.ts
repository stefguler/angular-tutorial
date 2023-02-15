import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { ContactComponent } from '../contact/contact.component'; if you wanna just use it on a specific component!


export interface IDeactivateComponent{
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuardService implements CanDeactivate<IDeactivateComponent> { // you can also use just a specific component, then use it instead of an interface, also add it as a component in the parameter of the canDeactivate method

  constructor() { }

  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
    return component.canExit();
  }

}
