import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from "./city.component";

const CityRoutes: Routes = [
    {path:'', component:CityListComponent }
];

@NgModule({
    imports:[RouterModule.forChild(CityRoutes)]

    }
)
export class CityRoutingModule{

}