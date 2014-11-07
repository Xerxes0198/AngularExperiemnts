(
	function()
	{
		var app = angular.module('store', []);

		app.controller('StoreController', function()
		{
			this.products = gems;
		});


		app.controller('PanelController', function()
		{
			this.tab = 1;

			this.selectTab = function(setTab)
			{
				this.tab = setTab;
			};

			this.isSelected = function(checkTab)
			{
				return this.tab === checkTab;
			};

		});

		var gems =
		[
			{
				name: 'Dodecahedron',
				price: 2.95,
				description: 'This is a gem!',
				canPurchase: true,
				soldOut: false
			},
			{
				name: 'Pentagon Gem',
				price: 5.95,
				description: 'This is another gem! It\'s slightly different and costs more!',
				canPurchase: true,
				soldOut: false
			}
		]
	}
)();


