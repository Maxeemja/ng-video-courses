import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgBreadcrumbModule} from "ng-breadcrumb";

import {AppComponent} from './app.component';
import {CoursesComponent} from './pages/courses-page/courses.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {SearchBarComponent} from './pages/courses-page/search-bar/search-bar.component';
import {CourseItemComponent} from './pages/courses-page/course-item/course-item.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {LogoComponent} from './core/header/logo/logo.component';
import {HighlightBorderDirective} from './directives/highlight-border.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {IfAuthenticatedDirective} from './directives/if-authenticated.directive';
import {AddCoursePageComponent} from './pages/add-course-page/add-course-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SearchBarComponent,
    CourseItemComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HighlightBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    LoginPageComponent,
    IfAuthenticatedDirective,
    AddCoursePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    NgBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
