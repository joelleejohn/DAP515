<template>
	<v-container>
		
	<v-sheet>

		<v-sheet width="100%" class="productGrid">
			<v-card min-height="60vh" min-width="100%" elevation="0">

			<v-card-title><h1>Christmas hand tied bouquet made with the finest flowers</h1></v-card-title>
			<v-container class="central-display">

				<v-card-text style="font-size: 16px"> <p>Each and every design is one-of-a-kind, created by an artisan florist using the freshest stems available on the day so, whilst your gift will look different from the one pictured, it’ll still be just as lovely</p>

	<p>An easy-to-care-for arrangement of flowers in a chic hatbox.</p> <p>Jolly festive tones for a truly Christmassy feel and a reusable hatbox makes a lovely keepsake</p>

	<p>This gift may contain lilies, take a look at our Lily free gifts</p></v-card-text>
	<v-divider vertical></v-divider>
				<v-img :src="image" width="280px" height="280px"></v-img>
			</v-container>
			<v-card-actions style="height: min-content">
				
				<v-spacer></v-spacer>
				<v-container class="fabs">
					<span style="font-weight: bold">£ 38.00</span>
					<v-btn color="#388539" dark @click="checkout">
							<v-icon style="padding-right: 5px;">{{ 'mdi-cart' }}</v-icon>
							Add to Cart & Checkout
					</v-btn>
					<v-btn @click="addToCart">
							<v-icon style="padding-right: 5px;">{{ 'mdi-cart-plus' }}</v-icon>
							Add to Cart
					</v-btn>
					
				</v-container>
			</v-card-actions>
			</v-card>
		</v-sheet>
		<v-spacer></v-spacer>
	</v-sheet>
	</v-container>

</template>
<style scoped>
.productGrid {
	display: flex;
	flex-direction: row;
}
h1 {
	font-size: 32px;
}

.fabs {
	display: grid;
	grid-auto-flow: row;
	gap: 10px;
	height: 50px;
	width: 300px;
	justify-content: flex-end;
}

.central-display {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: auto 30px 280px;
}
</style>
<script>
export default {
	data: () => ({
		image: require('../assets/Images/recomm1.jpg')
	}),
	mounted: function () {
		this.$gtag.pageview({
			page_path: '/product',
		});
	},
	methods: {
		addToCart: function () {
			this.$gtag.event('add_to_cart');
		},
		checkout: function () {
			this.$gtag.event('checkout');
		}
	}
}
</script>