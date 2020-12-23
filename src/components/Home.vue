<template>
<v-container>
	<h1>Welcome to Rosanne Florists</h1>
	<v-row>
		<v-carousel cycle>
			<v-carousel-item
				v-for="(slide, index) in mainitems"
				:key="index"
			>
			<v-sheet light id="mainSheet">
				<v-card light elevation="6" max-width="725">
					<v-img :src="slide.image"
						max-width="725"
						max-height="250"></v-img>
					<v-card-title>{{ slide.title }}</v-card-title>
					<v-card-subtitle>{{ slide.subtitle }}</v-card-subtitle>
					<v-card-actions>
						<v-btn>
							<v-icon color="#43a047" style="padding-right: 5px;">{{ 'mdi-flower-tulip' }}</v-icon>
							{{ slide.action }}
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-sheet>

			</v-carousel-item>
		</v-carousel>
	</v-row>
	<v-divider style="margin-top:10px"></v-divider>
	<v-row justify="center">
		<v-col v-for="(category, index) in subitems" :key="index" cols="3">
			<v-card >
				<v-card-title>{{ category.title }} </v-card-title>
				<v-img class="images" max-width="300px" :src="category.image"></v-img>
				<v-card-actions>
					<v-btn depressed>
						{{ category.action }}
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>

		<v-col cols="3">
			<v-card >
				<router-link :to="navigationItem.link" class="defaultLink">
				<v-card-title>{{ navigationItem.title }} </v-card-title>
					<v-img class="images" max-width="300px" :src="navigationItem.image"></v-img>
					<v-card-actions>
						<v-btn depressed>
							{{ navigationItem.action }}
						</v-btn>
					</v-card-actions>
				</router-link>
			</v-card>
		</v-col>
	</v-row>


</v-container>

</template>
<style lang="css">
#mainSheet {
	display: flex;
	width: 100%;
	height: min-content;
	justify-content: center; 
}

.images {
	justify-self: center;
}

.v-carousel__controls {
	border-radius: 5px;
}

button.v-btn--depressed {
	color: #43a047 !important;
}

.defaultLink {
    text-decoration: none;
}
</style>
<script>
export default {
	data: () => ({
		mainitems: [
			{title: 'Christmas Collection', action: 'View Christmas Collection', subtitle: 'Our official collection of gifts and presents made especially for Christmas', image: require('../assets/Images/christmascollection.jpg'), isDisabled: false },
			{title: 'Local Christmas Gifts', action: 'View Local Collection', subtitle: 'Our collection of gifts made by local artists for Christmas', image: require('../assets/Images/localchristmascollection.jpg'), isDisabled: false },
			{title: 'Local Gift Collection', action: 'View Local Collection', subtitle: 'Our collection of gifts made by local artists', image: require('../assets/Images/localgiftcollection.jpg'), isDisabled: false }
		],
		subitems: [
			{title: 'Gift Flowers', action: 'View Gift Flowers', subtitle: 'Our collection of gift flowers', image: require('../assets/Images/homeGifts.jpg') },
			{title: 'Bouquets', action: 'View Bouquets Collection', subtitle: 'Our collection of bouquets', image: require('../assets/Images/homeBouquets.jpg') },
		],
		navigationItem: {title: 'Funeral', action: 'View Funeral Tributes', subtitle: 'Our collection of funeral tributes', image: require('../assets/Images/homeFuneral.jpg'), link: "/funeralflowers" },

	})
}
</script>