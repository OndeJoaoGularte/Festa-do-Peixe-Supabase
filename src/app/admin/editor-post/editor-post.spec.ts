import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPost } from './editor-post';

describe('EditorPost', () => {
  let component: EditorPost;
  let fixture: ComponentFixture<EditorPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
