/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Vacancy_detailComponent } from './vacancy_detail.component';

describe('Vacancy_detailComponent', () => {
  let component: Vacancy_detailComponent;
  let fixture: ComponentFixture<Vacancy_detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vacancy_detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vacancy_detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
