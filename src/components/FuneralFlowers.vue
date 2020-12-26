<template>
	<v-container>
		<h1>Funeral Flowers</h1>
		<p>We have created a range of colour options and design styles for this sensitive time.  Please call us on <a class="standardLink" href="tel:01444-244792">01444-244792 </a> to order your chosen tribute or to discuss your requirements with us. We can carefully help you select the style and flowers/ colours to create your own individual piece. Flowers offer a simple & elegant way to pay your respects and express your feelings.</p>
	<v-sheet class="imagefirst">
		<v-col cols="10" offset="1" class="imagefirst">

		<v-card width="400px">
			<v-img :src="images[0]" width="400px" height="300px"></v-img>
			<v-card-title>Local Tributes</v-card-title>
			<v-card-text>Tributes made by Rosanne Florists</v-card-text>
			<v-card-actions>
				<v-btn dark color="#43a047">
						<v-icon style="padding-right: 5px;">{{ 'mdi-flower-tulip' }}</v-icon>
						View Local Tributes
				</v-btn>
			</v-card-actions>
		</v-card>
		<v-spacer></v-spacer>
		<v-card width="400px">
			<v-img :src="images[1]" width="400px" height="300px"></v-img>
			<v-card-title>Interflora Tributes</v-card-title>
			<v-card-text>Tributes designed by Interflora</v-card-text>
			<v-card-actions>
				<v-btn dark color="#43a047">
					<v-icon style="padding-right: 5px;">{{ 'mdi-flower-tulip' }}</v-icon>
					View Interflora Tributes
				</v-btn>
			</v-card-actions>
		</v-card>
		</v-col>
	</v-sheet>
	</v-container>

</template>
<style scoped>
	.imagefirst {
		display: flex;
		flex-direction: row;
	}
</style>
<script>
export default {
	data: () => ({
		images: [
			require('../assets/Images/funeraltributes1.jpg'),
			require('../assets/Images/funeraltributes2.jpg')
		]
	})
}
</script>