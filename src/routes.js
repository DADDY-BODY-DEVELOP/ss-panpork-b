import React from "react";

const Toaster = React.lazy(() =>
  import("./pages/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./pages/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./pages/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./pages/base/cards/Cards"));
const Carousels = React.lazy(() => import("./pages/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./pages/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./pages/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./pages/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./pages/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./pages/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./pages/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./pages/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./pages/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./pages/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./pages/base/switches/Switches"));

const Tabs = React.lazy(() => import("./pages/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./pages/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./pages/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./pages/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./pages/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./pages/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./pages/charts/Charts"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./pages/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./pages/icons/flags/Flags"));
const Brands = React.lazy(() => import("./pages/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./pages/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./pages/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./pages/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./pages/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./pages/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./pages/widgets/Widgets"));
const Users = React.lazy(() => import("./pages/users/Users"));
const User = React.lazy(() => import("./pages/users/User"));

const FoodMenu = React.lazy(() => import("./views/FoodMenu/FoodMenu"));
const FoodMenuAdd = React.lazy(() => import("./views/FoodMenu/FoodMenuAdd"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },

  { path: "/foodmenu", exact: true, name: "Food Menu", component: FoodMenu },
  {
    path: "/foodmenu/add",
    exact: true,
    name: "Food Menu Add",
    component: FoodMenuAdd,
  },
  // { path: "/foodmenu", exact: true, name: "Food Menu", component: FoodMenu },
  // { path: "/blog", exact: true, name: "Food Menu", component: Blog },
  // { path: "/blog", exact: true, name: "Food Menu", component: Blog },
  // { path: "/blog", exact: true, name: "Food Menu", component: Blog },
  // { path: "/about", exact: true, name: "Food Menu", component: About },
  // { path: "/about", exact: true, name: "Food Menu", component: About },
  // { path: "/about", exact: true, name: "Food Menu", component: About },
  // { path: "/contact", exact: true, name: "Food Menu", component: Contact },
  // { path: "/contact", exact: true, name: "Food Menu", component: Contact },
  // { path: "/contact", exact: true, name: "Food Menu", component: Contact },
  // { path: "/user", exact: true, name: "Food Menu", component: User },
  // { path: "/user", exact: true, name: "Food Menu", component: User },
  // { path: "/user", exact: true, name: "Food Menu", component: User },
];

export default routes;
