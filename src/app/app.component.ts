import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from "./core/services/loading.service";
import { CommonModule } from "@angular/common";
import { routeSlideAnimation } from "./route-animations";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, CommonModule, MatProgressBarModule],
    animations: [routeSlideAnimation],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent {
    loading$ = this.loadingService.loading$;

    constructor(private loadingService: LoadingService) { }

    prepareRoute(outlet: RouterOutlet) {
        return outlet?.activatedRouteData?.['animation'];
    }
}
