<template>
	<v-alert type="info" class="cvUpdate" dismissible>
		<h2>CUSTOMER NOTICE</h2><br>
		<p>Our doors are now open again!</p> <br>

		<p> We will continue delivering and offering a click and collect service </p><br>

		<p> Our website will remain open to place orders and we will be adding some gift items and plants to purchase. </p><br>

		<p> Please call us on <span><v-icon>mdi-phone</v-icon><a href="tel:01444-244792">01444-244792 </a></span> to place an order or if you have questions you would like answered. </p><br>

		<p> We are still offering contactless deliveries. Due to the current situation some flowers may have to be substituted. </p> <br>
	</v-alert>
</template>
<style>
.cvUpdate {
	display: grid;
	height: min-content;
	width: 300px;
}
span > a[href] {
	color: #43a047;
	background-color: white;
	padding: 2px;
	border-radius: 3px;
	text-decoration: none;
	margin: 0 5px;
}
</style>
<script>
export default {
	
}
</script>