"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* * * ./app/comments/components/index.ts * * */
// Imports
var core_1 = require("@angular/core");
var CommentComponent = (function () {
    function CommentComponent() {
        // Event tracking properties
        this.listId = 'COMMENT_COMPONENT_LIST';
        this.editId = 'COMMENT_COMPONENT_EDIT';
    }
    return CommentComponent;
}());
CommentComponent = __decorate([
    core_1.Component({
        selector: 'comment-widget',
        template: "\n        <div>\n            \n         \n        </div>\n    ",
    })
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=index.js.map