import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LeftComponent } from './left/left.component';
import { RigtComponent } from './rigt/rigt.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { IconsComponent } from './icons/icons.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MiddleBarComponent } from './middle-bar/middle-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    SideBarComponent,
    LeftComponent,
    RigtComponent,
    SettingComponent,
    ProfileComponent,
    IconsComponent,
    ToolBarComponent,
    MiddleBarComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
