import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { BlankNavComponent } from './components/blank-nav/blank-nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UsersComponent } from './components/users/users.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from './pipes/search.pipe';
import { FilteruserPipe } from './pipes/filteruser.pipe';
import { FilterstatusPipe } from './pipes/filterstatus.pipe';
import { FilterdeadlinePipe } from './pipes/filterdeadline.pipe';
import { ConfirmLeavingComponent } from './components/confirm-leaving/confirm-leaving.component';
import { UsersearchPipe } from './pipes/usersearch.pipe';
import {NgxPaginationModule} from 'ngx-pagination'
import { ErrorInterceptor } from './interceptors/error.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    AuthNavComponent,
    BlankNavComponent,
    NotFoundComponent,
    UsersComponent,
    AddtaskComponent,
    SearchPipe,
    FilteruserPipe,
    FilterstatusPipe,
    FilterdeadlinePipe,
    ConfirmLeavingComponent,
    UsersearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule,BrowserAnimationsModule,
    NgxSpinnerModule,ToastrModule.forRoot(),MatDialogModule,NgxPaginationModule,MatFormFieldModule, MatInputModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}