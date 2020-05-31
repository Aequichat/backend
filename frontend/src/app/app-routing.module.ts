import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { ChatTemplateComponent } from './main/pages/chat-template/chat-template.component';
import { ChatComponent } from './main/pages/chat-template/components/chat/chat.component';
import { IntroductionComponent } from './main/pages/introduction/introduction.component';
import { LoginComponent } from './main/pages/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'chats',
    component: ChatTemplateComponent,
    children: [
      {
        path: ':id',
        component: ChatComponent
      },
      {
        path: '',
        component: IntroductionComponent
      }
    ]
  },
  {
    path: 'items',
    loadChildren: () => import('./administrator/administrator.module').then(m => m.AdministratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
