/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library demo.library-template.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * library-template
		 *
		 * @namespace
		 * @name demo.library-template
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "demo.library-template",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [],
			elements: []
		});

		/* eslint-disable */
		return demo.library - template;
		/* eslint-enable */

	}, /* bExport= */ false);