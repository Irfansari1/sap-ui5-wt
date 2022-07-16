sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    //all the rootview info under metadata is repleced by manifest, and delete index.js file, and delete i18n model in component
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
            rootView : {
                manifest:"json"
            }
        },
        init: function () {
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            //set data models
            var oData = {
                recipient: {
                name: "UI5",
                },
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

        }
    })
});