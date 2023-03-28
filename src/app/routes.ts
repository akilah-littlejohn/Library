import { Route } from "@angular/router";


export const routes: Route[] = [
    {
      path: 'table',
      loadComponent: () =>
        import('./table/table.component').then((x) => x.TableComponent),
    },
    {
        path:'info/:id',
        loadComponent:() => 
        import('./book-detail-card/book-detail-card.component').then((x => x.BookDetailCardComponent))
    }
  ,
    {
      path: '',
      redirectTo: 'table',
      pathMatch: 'full',
    },
  ];