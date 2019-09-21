import { NgModule } from "@angular/core";
import { CityRoutingModule } from "./city.routing.module";
import { CityListComponent } from "./city.component";

@NgModule({
    imports:[CityRoutingModule],
    declarations:[CityListComponent]
})
export class CityModule{
    
}