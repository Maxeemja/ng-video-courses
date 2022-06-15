import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from "./pages/courses-page/courses.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AddCoursePageComponent} from "./pages/add-course-page/add-course-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {UserGuard} from "./guard/user.guard";

const routes: Routes = [
  {path: 'courses', component: CoursesComponent, canActivate: [UserGuard]},
  {path: 'courses/new', component: AddCoursePageComponent, canActivate: [UserGuard]},
  {path: 'courses/:id', component: AddCoursePageComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
