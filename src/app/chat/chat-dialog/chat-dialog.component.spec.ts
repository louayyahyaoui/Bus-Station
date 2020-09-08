import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDialogComponent } from './chat-dialog.component';

describe('ChatDialogComponent', () => {
  let component: ChatDialogComponent;
  let fixture: ComponentFixture<ChatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
