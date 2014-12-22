sap.ui.jsview("demo.Page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.Page2
	*/ 
	getControllerName : function() {
		return "demo.Page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.Page2
	*/ 
	createContent : function(oController) {
		
		var oText = new sap.ui.commons.TextView({
			text: "{/mySecret}"
		})
		
		return oText;
	}

});
