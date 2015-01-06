sap.ui.jsview("splitappdemo.Details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitappdemo.Details
	*/ 
	getControllerName : function() {
		return "splitappdemo.Details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitappdemo.Details
	*/ 
	createContent : function(oController) {
		
		var oLayout = new sap.ui.commons.layout.MatrixLayout({
			id: "matrixId",
			layoutFixed: true,
			columns: 2,
			width: '90%',
			widths: ['20%','80%']
		});
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Name", design:sap.ui.commons.TextViewDesign.Bold}),
							new sap.ui.commons.TextView({text: "{item>/name}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Price", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/price}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Display", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/display}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Storage", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/storage}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Processor", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/processor}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"Memory", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/memory}"})
		);
		
		oLayout.createRow(new sap.ui.commons.TextView({text:"OS", design:sap.ui.commons.TextViewDesign.Bold}),
				new sap.ui.commons.TextView({text: "{item>/os}"})
		);
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [oLayout]
		});
	}

});