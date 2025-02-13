sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], (UIComponent, JSONModel, ResourceModel) => {
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
         },
        init() {
            UIComponent.prototype.init.apply(this, arguments);
            const oData = {
                recipient: {
                    name: "name"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
            this.getRouter().initialize();
        }
    });
});