/*global QUnit*/

sap.ui.define([
	"project_test/controller/ViewZ.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewZ Controller");

	QUnit.test("I should test the ViewZ controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
