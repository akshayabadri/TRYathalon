"use strict";
var router_1 = require("@angular/router");
var basicForm_component_1 = require("./basicForm/basicForm.component");
var templateForm_component_1 = require("./templateForm/templateForm.component");
var reactiveForm_component_1 = require("./reactiveForm/reactiveForm.component");
var starterTemplateForm_component_1 = require("./starterTemplateForm/starterTemplateForm.component");
var starterReactiveForm_component_1 = require("./starterReactiveForm/starterReactiveForm.component");
var obs_component_1 = require("./obs.component");
// import {DiComponent } from './di.component';
var hero_list_component_1 = require("./hero-list.component");
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/startertemplateform' },
    { path: 'startertemplateform', component: starterTemplateForm_component_1.StarterTemplateFormComponent },
    { path: 'starterreactiveform', component: starterReactiveForm_component_1.StarterReactiveFormComponent },
    { path: 'basicform', component: basicForm_component_1.BasicFormComponent },
    { path: 'templateform', component: templateForm_component_1.TemplateFormComponent },
    { path: 'reactiveform', component: reactiveForm_component_1.ReactiveFormComponent },
    { path: 'wikipedia', component: obs_component_1.ObsComponent },
    // {path:'di',component:DiComponent},
    { path: 'herolist', component: hero_list_component_1.HeroListComponent }
];
exports.app_routing = {
    routes: router_1.RouterModule.forRoot(app_routes),
    components: [
        starterTemplateForm_component_1.StarterTemplateFormComponent, starterReactiveForm_component_1.StarterReactiveFormComponent,
        basicForm_component_1.BasicFormComponent, templateForm_component_1.TemplateFormComponent, reactiveForm_component_1.ReactiveFormComponent, obs_component_1.ObsComponent
    ]
};
//# sourceMappingURL=app.routing.js.map