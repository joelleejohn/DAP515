<template>
<v-container>
	<h1>Welcome to Rosanne Florists</h1>
	<v-divider style="margin-bottom: 5px"></v-divider>
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
						<v-btn dark  color="#43a047">
							<v-icon style="padding-right: 5px;">{{ 'mdi-flower-tulip' }}</v-icon>
							{{ slide.action }}
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-sheet>

			</v-carousel-item>
		</v-carousel>
	</v-row>
	<v-divider style="margin-top:10px"></v-divider>
	<br>
	<v-flex width="100%">
		<v-card-title style="justify-content: center; font-size:24px">Popular Categories</v-card-title>
	</v-flex>
	<v-row justify="center">
		<v-col v-for="(category, index) in subitems" :key="index" cols="3">
			<v-card >
				<v-card-title>{{ category.title }} </v-card-title>
				<v-img class="images" max-width="300px" :src="category.image"></v-img>
				<v-card-actions>
					<v-btn dark color="#388539">
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
						<v-btn dark color="#388539">
							{{ navigationItem.action }}
						</v-btn>
					</v-card-actions>
				</router-link>
			</v-card>
		</v-col>
	</v-row>
	<v-divider style="margin-top:10px"></v-divider>
	<v-flex width="100%">
		<v-card-title style="justify-content: center; font-size:24px">Our Recommendations</v-card-title>
	</v-flex>
	<v-row justify="center">
		<v-col cols="3" v-for="item in recommendations" :key="item.title">
			<router-link class="standardLink" to="/product">
				<v-card>
					<v-img class="images white--text" :src="item.image" min-width="300px">
						<v-card-title class="imagetitle">{{ item.title }}</v-card-title>
					</v-img>
					<v-card-subititle class="subtitlepadded">
						<v-containter style="display: flex; flex-direction: row; gap: 30px; justify-content: space-between">
						{{item.action}}  <span style="font-weight: bold; padding-right: 10px">  £ {{ item.price }}</span></v-containter>
					</v-card-subititle>
					<v-card-actions>
						
						<v-spacer></v-spacer>
						<v-btn dark color="#388539">
							View
						</v-btn>
					</v-card-actions>
				</v-card>
			</router-link>
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

.imagetitle {
	background-color: rgba(100, 100, 100, 0.7);
	font-size: 24px;
}

.v-carousel__controls {
	border-radius: 5px;
}

.defaultLink {
    text-decoration: none;
}

h1 {
	font-family: 'Balthazar';
}

.subtitlepadded {
	padding: 10px;
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
		recommendations: [
			{title: 'Best Buy', action: 'Christmas Bouquet', price: 38.00, subtitle: 'Our most popular item this season!', image: require('../assets/Images/recomm1.jpg')},
			{title: 'Florist\' Choice', action: 'Christmas Hatbox', price: 40.00, subtitle: 'Our own florists\' favourites!', image: require('../assets/Images/recomm2.jpg')},
			{title: 'Seasonal Selection', action: 'Large Christmas Bouquet', price: 45.00, subtitle: 'Looking for a seasonal gift? Here\'s some inspiration', image: require('../assets/Images/recomm3.jpg')}
		]
	})
}
</script>