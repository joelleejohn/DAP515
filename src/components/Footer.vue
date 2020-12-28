<template>
	<v-footer padless>
		<v-card class="basicGrid">
			<v-row style="justify-content: center">
				<v-col offset="1" cols="3">
					<v-spacer></v-spacer>
					<v-list>
						<v-subheader>Menu</v-subheader>
						<v-container v-for="(link, i) in links" :key="i">
							<v-list-item v-if="!link.link">
								<v-list-item-icon><v-icon v-text="link.icon"></v-icon></v-list-item-icon>
								<v-list-item-content>
									<v-list-item-title v-text="link.text"></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
							<router-link class="standardLink" :to="link.link" v-if="link.link">
								<v-list-item>
									<v-list-item-icon><v-icon color="#388539" v-text="link.icon"></v-icon></v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title style="color: black" v-text="link.text"></v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</router-link>
						</v-container>
					</v-list>
				</v-col>
				<v-col cols="3">
					<v-list>
						<v-subheader>Find Us Here</v-subheader>
						<v-list-item>
							5 Keymer Parade, Keymer Road
						</v-list-item>
						<v-list-item>
							Burgess Hill
						</v-list-item>
						<v-list-item>
							West Sussex
						</v-list-item>
						<v-list-item>
							RH15 0AB
						</v-list-item>
						<v-list-item>
							<a class="standardLink" href="tel:01444 244792">01444 244792</a>
						</v-list-item>
						<v-list-item>
							<a class="standardLink" href="mailto:clare@rosanneflorists.com">clare@rosanneflorists.com</a>
						</v-list-item>
					</v-list>

				</v-col>
				<v-col cols="3">
					<v-list>
						<v-subheader>Legal</v-subheader>
						<v-list-item>
							<a class="standardLink" href="https://www.rosanneflorists.com/terms-&-conditions.htm" target="blank">Terms and Conditions</a>
						</v-list-item>
						<v-list-item>
							<a class="standardLink" href="https://www.rosanneflorists.com/privacy-policy.htm" target="blank">Privacy Policy</a>
						</v-list-item>
						<v-list-item>
							<a class="standardLink" href="https://www.rosanneflorists.com/cookie-policy.htm" target="blank">Cookie Policy</a>
						</v-list-item>
					</v-list>
				</v-col>
				
			</v-row>
		</v-card>
	</v-footer>
</template>
<style scoped>
.basicGrid {
	display: grid;
	grid-auto-flow: column;
	width: 100%;
	height: 100%;
}
</style>
<script>
export default {
	data: () => ({
		links: [
            {text: 'Home', icon: "mdi-home", link: "/", hasSubmenu: false},
            {text: 'Products', icon: "mdi-flower-tulip", link: null, hasSubmenu: true},
            {text: 'Contact Us', icon: "mdi-phone", link: "/contactus", hasSubmenu: false},
            {text: 'Flower Delivery', icon: "mdi-truck-delivery", link: "/404", hasSubmenu: false},
            {text: 'About Us', icon: "mdi-heart", link: "/404", hasSubmenu: false},
        ],
	})
}
</script>