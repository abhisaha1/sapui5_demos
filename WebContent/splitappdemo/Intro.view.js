sap.ui.jsview("splitappdemo.Intro", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitappdemo.Intro
	*/ 
	getControllerName : function() {
		return "splitappdemo.Intro";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitappdemo.Intro
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Welcome",
			content: [
			      new sap.ui.commons.TextView({
			    	  text: "Welcome to Mac World! Please select a product from the master Page(left) to see the description",
			    	  design: sap.ui.commons.TextViewDesign.H5
			      })    
			]
		});
	}

});