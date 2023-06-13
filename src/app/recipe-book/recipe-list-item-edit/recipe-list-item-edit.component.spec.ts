import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListItemEditComponent } from './recipe-list-item-edit.component';

describe('RecipeListItemEditComponent', () => {
  let component: RecipeListItemEditComponent;
  let fixture: ComponentFixture<RecipeListItemEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeListItemEditComponent]
    });
    fixture = TestBed.createComponent(RecipeListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
