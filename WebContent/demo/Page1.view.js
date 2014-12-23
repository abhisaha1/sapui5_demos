sap.ui.jsview("demo.Page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo.Page1
	*/ 
	getControllerName : function() {
		return "demo.Page1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo.Page1
	*/ 
	createContent : function(oController) {
		
		var oText = new sap.ui.commons.TextView({
			text: "Enter secret word: "
		})
		
		var oInput = new sap.ui.commons.TextField(this.createId("secretId"),{
			value: "{/mySecret}"
		});
		
		
		var oButton = new sap.ui.commons.Button({
			text: "submit",
			press: function() {
				oController.navigateToPage2("Page2");
			}
		});
		
		var ele = [oText, oInput, oButton];
		
		return ele;
		
	}

});
