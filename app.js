(
	function()
	{
		var app = angular.module('store', []);

		app.controller('StoreController', function()
		{
			this.products = gems;
		});

		var gems =
		[
			{
				name: 'Dodecahedron',
				price: 2.95,
				description: 'This is a gem!',
				canPurchase: false,
				soldOut: false
			},
			{
				name: 'Pentagon Gem',
				price: 5.95,
				description: 'This is another gem! It\'s slightly different and costs more!',
				canPurchase: false,
				soldOut: false
			}
		]
	}
)();


