import { Routes } from '@angular/router';
import { CityListComponent } from '../../city/city.component';

// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const SecuredLayoutRoutes: Routes = [
    // { path:'', redirectTo:'books', pathMatch:'full'},
    { path: 'books',      loadChildren: "@example-app/books/books.module#BooksModule"},
    { path: 'cities', loadChildren: "@example-app/city/city.module#CityModule"},
    { path: 'teams', loadChildren: "@example-app/teams/teams.module#TeamsModule"},
    
//    { path: 'cities', component:CityListComponent }
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
