/*jshint unused:false */

(function (exports) {

	'use strict';

	var BASE_URL = 'https://yatodoapi-tst.azurewebsites.net';

	exports.todoStorage = {
		fetch: async function () {
			const response = await fetch(`${BASE_URL}/api/todoitems/`);
			return await response.json();
		},
		save: async function (todos) {
			const requestOptions = {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ todoItems: todos })
			};
			await fetch(`${BASE_URL}/api/todoitems/bulk`, requestOptions);
		}
	};

})(window);