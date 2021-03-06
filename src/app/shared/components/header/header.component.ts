import { Observable } from 'rxjs';
import { MainState } from './../../interfaces/index.interface';
import { isLogged } from './../../store/selectors/login.selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Unsubscribable } from 'src/app/utils/decorators/unsubscribable.decorator';
import { Store, select } from '@ngrx/store';
import { LogoutAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Unsubscribable()
export class HeaderComponent implements OnInit {

  public readonly appName = 'TODO';
  public readonly framework = 'Angular';

  public isLogged$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<MainState>
  ) { }

  public ngOnInit(): void {
    this.initListeners();
  }

  public login(): void {
    this.router.navigate(['login']);
  }

  public logout(): void {
    this.store.dispatch(new LogoutAction());
    this.router.navigate(['login']);
  }

  private initListeners(): void {
    this.isLogged$ = this.store
      .pipe(
        select(isLogged)
      );
  }
}
