import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AlertComponent } from "../alert/alert.component";
import { DropdownDirective } from "../directives/dropdown.directive";
import { PlaceholderDirective } from "../directives/placeholder.directive";
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule {}
