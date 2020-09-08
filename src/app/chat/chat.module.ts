import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import {ChatService} from './chat.service';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
