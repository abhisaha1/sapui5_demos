sap.ui.controller("splitappdemo.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitappdemo.Master
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel("http://ajaxtown.com/playground/macSpecs.php");
		sap.ui.getCore().setModel(oModel,'data');
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitappdemo.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitappdemo.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitappdemo.Master
*/
//	onExit: function() {
//
//	},
	
	itemSelected: function() {
		
		var app = sap.ui.getCore().byId("appId");
		var list = sap.ui.getCore().byId("listId");
		
		var sItem = list.getSelectedItem();
		var sPath = sItem.oBindingContexts.data.sPath;
		
		var item = sap.ui.getCore().getModel('data').getProperty(sPath);
		
		var oModel = new sap.ui.model.json.JSONModel(item);
		
		sap.ui.getCore().setModel(oModel,'item');
		
		app.toDetail('detailsId','slide')//show, fade, slide
	}

});