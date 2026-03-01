import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artigo } from './artigo';

describe('Artigo', () => {
  let component: Artigo;
  let fixture: ComponentFixture<Artigo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artigo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artigo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
