import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, RouterModule],
  exports: [ChatComponent]
})
export class SharedModule {}
