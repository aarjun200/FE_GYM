import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AlltrainersComponent } from "./alltrainers.component";
describe("AlltrainersComponent", () => {
  let component: AlltrainersComponent;
  let fixture: ComponentFixture<AlltrainersComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AlltrainersComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AlltrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
