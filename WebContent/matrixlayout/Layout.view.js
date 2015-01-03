sap.ui.jsview("matrixlayout.Layout", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf matrixlayout.Layout
	*/ 
	getControllerName : function() {
		return "matrixlayout.Layout";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf matrixlayout.Layout
	*/ 
	createContent : function(oController) {
		
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true,
			width: '600px',
			columns: 4,
			widths: ['150px','150px','150px','150px']
		})
		
		
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
			colSpan: 4
		});
		
		var oText = new sap.ui.commons.TextView({
			text: "User Profile Information",
			design: sap.ui.commons.TextViewDesign.H4
		});
		
		oCell.addContent(oText);
		
		oMatrix.createRow(oCell); //first row
		
		var oLabel = new sap.ui.commons.Label({
			text: "First Name"
		});
		
		var oInput = new sap.ui.commons.TextField({
			width: '200px'
		});
		
		oLabel.setLabelFor(oInput);
		
		var oImg = new sap.ui.commons.Image({
			src: "http://battellemedia.com/media/images/twitter-bird.png",
			height: "150px"
		});
		
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
			rowSpan: 3
		});
		
		oCell1.addContent(oImg);
		
		oMatrix.createRow(oLabel,oInput,'',oCell1);
		
		oLabel = new sap.ui.commons.Label({
			text: "Last Name"
		});
		
		oInput = new sap.ui.commons.TextField({
			width: '200px'
		});
		
		oLabel.setLabelFor(oInput);
		
		oMatrix.createRow(oLabel,oInput); //second row
		
		var btn = new sap.ui.commons.Button({text:"Save"});
		
		oMatrix.createRow('',btn);
		
		
		
		
		
		return oMatrix;
		
	}

});
