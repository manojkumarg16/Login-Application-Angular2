import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavoneComponent } from './navone/navone.component';
import { RegisterComponent } from './register/register.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { AuthGuard } from './guard/auth.guard';

export const router: Routes= [
	{ path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent },
	{ path: 'login/register', component: RegisterComponent },
	{ path: 'navone', component: NavoneComponent , canActivate:[AuthGuard],
	children: [
			{ path: 'userentry', component: UserEntryComponent }
			]
		}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);