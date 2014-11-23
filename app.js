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

		app.controller=('ReviewController', function()
		{
			this.review = {};

			this.addReview = function(product)
			{
				product.reviews.push(this.review)
				this.review = {};
			}

		});

		var gems =
		[
			{
				name: 'Dodecahedron',
				price: 2.95,
				description: 'This is a gem!',
				canPurchase: true,
				soldOut: false,
				reviews: 
				[
					{
						review: 'Simple review',
						author: 'test@test.com',
						stars: 5
					}
				]
				
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


