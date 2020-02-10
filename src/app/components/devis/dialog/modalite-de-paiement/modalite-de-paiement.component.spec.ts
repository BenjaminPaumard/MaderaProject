import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModaliteDePaiementComponent } from "./modalite-de-paiement.component";
import { AppComponent } from "src/app/app.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { PageNotFoundComponent } from "src/app/components/page-not-found/page-not-found.component";
import { NavBarComponent } from "src/app/shared/nav-bar/nav-bar.component";
import { DevisComponent } from "../../devis.component";
import { DialogDeleteComponent } from "src/app/shared/dialog-delete/dialog-delete.component";
import { ProjetComponent } from "src/app/components/projet/projet.component";
import { AddProjetDialogComponent } from "src/app/components/projet/dialog/add-projet-dialog/add-projet-dialog.component";
import { EditProjetDialogComponent } from "src/app/components/projet/dialog/edit-projet-dialog/edit-projet-dialog.component";
import { PlanComponent } from "src/app/components/plan/plan.component";
import { AddPlanDialogComponent } from "src/app/components/plan/dialog/add-plan-dialog/add-plan-dialog/add-plan-dialog.component";
import { EditPlanDialogComponent } from "src/app/components/plan/dialog/edit-plan-dialog/edit-plan-dialog/edit-plan-dialog.component";
import { GestionStockComponent } from "src/app/components/gestion-stock/gestion-stock.component";
import { SnackBarComponent } from "src/app/shared/snack-bar/snack-bar.component";
import { ClientComponent } from "src/app/components/client/client.component";
import { AddClientDialogComponent } from "src/app/components/client/dialog/add-client-dialog/add-client-dialog.component";
import { EditClientDialogComponent } from "src/app/components/client/dialog/edit-client-dialog/edit-client-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/material-module";
import { MatTableModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { VoirDevisComponent } from "../../voir-devis/voir-devis.component";

describe("ModaliteDePaiementComponent", () => {
  let component: ModaliteDePaiementComponent;
  let fixture: ComponentFixture<ModaliteDePaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        NavBarComponent,
        DevisComponent,
        DialogDeleteComponent,
        ProjetComponent,
        NavBarComponent,
        AddProjetDialogComponent,
        EditProjetDialogComponent,
        PlanComponent,
        AddPlanDialogComponent,
        EditPlanDialogComponent,
        GestionStockComponent,
        SnackBarComponent,
        ClientComponent,
        AddClientDialogComponent,
        EditClientDialogComponent,
        ModaliteDePaiementComponent,
        VoirDevisComponent
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        MatTableModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaliteDePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
