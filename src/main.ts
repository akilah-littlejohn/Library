import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { LibraryService } from "./app/library.service";

bootstrapApplication(AppComponent, {
    providers:[provideHttpClient(), importProvidersFrom(LibraryService)]
})