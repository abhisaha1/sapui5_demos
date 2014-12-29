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
		
		var oTable = new sap.ui.table.Table({
			tableId: "mytable",
			visibleRowCount: 5,
			editable: false
		});
		
		
		var oControl = new sap.ui.commons.TextView({text:"{northwind>ContactName}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Contact Name"}),
			visible: true,
			template: oControl
			
			
		}));
		
		var oControl = new sap.ui.commons.TextView({text:"{northwind>ContactTitle}"})
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Contact ContactTitle"}),
			visible: true,
			template: oControl
			
			
		}));
		
		
		
		oTable.bindRows("northwind>/value");
		
		
		//ajaxtown data
		
		var oTable1 = new sap.ui.table.Table({
			tableId: "mytable",
			visibleRowCount: 5,
			editable: false
		});
		
		
		var oControl = new sap.ui.commons.TextView({text:"{ajaxtown>firstName}"})
		
		oTable1.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "First Name"}),
			visible: true,
			template: oControl
			
			
		}));
		
		var oControl = new sap.ui.commons.TextView({text:"{ajaxtown>lastName}"})
		
		oTable1.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text: "Last Name"}),
			visible: true,
			template: oControl
			
			
		}));
		
		
		
		oTable1.bindRows("ajaxtown>/");
		
		var ele = [oTable, oTable1];
		
		return ele;
		
		
	}

});
