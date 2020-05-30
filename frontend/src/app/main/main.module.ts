import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { ChatTemplateComponent } from './pages/chat-template/chat-template.component';
import { ChatComponent } from './pages/chat/chat.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LoginComponent } from './pages/login/login.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { TimeTransitionComponent } from './components/time-transition/time-transition.component';

@NgModule({
  declarations: [LoginComponent, StoryCardComponent, StoriesComponent, ChatTemplateComponent, ChatComponent, IntroductionComponent, TimeTransitionComponent],
  imports: [
    MatSidenavModule,
    CommonModule
  ]
})
export class MainModule { }
