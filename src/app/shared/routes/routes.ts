import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "home",
    loadChildren: () => import("../../components/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "general-secretary",
    loadChildren: () => import("../../components/general-secretary/general-secretary.module").then((m) => m.GeneralSecretaryModule),
  },
  {
    path: "country-data",
    loadChildren: () => import("../../components/country-data/country-data.module").then((m) => m.CountryDataModule),
  },
  {
    path: "category",
    loadChildren: () => import("../../components/main-category/main-category.module").then((m) => m.MainCategoryModule),
  },
];
