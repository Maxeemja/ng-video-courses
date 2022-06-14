import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {NavbarComponent} from './courses/navbar/navbar.component';
import {SearchBarComponent} from './courses/search-bar/search-bar.component';
import {CourseItemComponent} from './courses/course-item/course-item.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './header/logo/logo.component';
import {HighlightBorderDirective} from './directives/highlight-border.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {LoginPageComponent} from './login-page/login-page.component';
import {IfAuthenticatedDirective} from './directives/if-authenticated.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
