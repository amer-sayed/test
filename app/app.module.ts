import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs"
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { SkillComponent } from './skill/skill.component';
import { AddskillComponent } from './addskill/addskill.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MyskillComponent } from './myskill/myskill.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes =[
  {path:"" ,redirectTo:"home", pathMatch:"full"},
  {path:"home", component:SliderComponent},
  {path:"skill", component:SkillComponent},
  {path:"addskill", component:AddskillComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"myskill", component:MyskillComponent},
  {path:"profile", component:ProfileComponent},
]
  
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    SkillComponent,
    AddskillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
