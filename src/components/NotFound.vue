<template>
<v-container>
	<h1>Oh Flowers! We couldn't find the page you were looking for 😢</h1>
	<v-sheet class="notfound">
		<v-card>
			<v-card-title>
				The following pages have been implemented
			</v-card-title>
			<v-timeline dense>
				
				<v-timeline-item color="#388539" icon="mdi-home">
					<router-link class="standardLink" to="/">
						<div>
							Path: /
						</div>
						<div>
							The home page - you can acess the funeral flowers page and the products page from here
						</div>
					</router-link>
				</v-timeline-item>
				<v-timeline-item color="#388539" icon="mdi-flower-tulip">
					<router-link class="standardLink" to="/product">
						<div>
							Path: /product
						</div>
						<div>
							An example products page with Google Analytics and multiple form action buttons - can be accessed from the home page
						</div>
					</router-link>
				</v-timeline-item>
				<v-timeline-item color="#388539" icon="mdi-phone">
					<router-link class="standardLink" to="/contactus">
						<div>
							Path: /contactus
						</div>
						<div>
							The contact us page with a new layout and contact us form with validation
						</div>
					</router-link>
				</v-timeline-item>
				<v-timeline-item color="#388539" icon="mdi-flower-tulip">
					<router-link class="standardLink" to="/funeralflowers">
						<div>
							Path: /funeralflowers
						</div>
						<div>
							The funeral flowers page, now making it clearer what the distiction is between the two categories - can be accessed from the home page
						</div>
					</router-link>
				</v-timeline-item>
			</v-timeline>
		</v-card>
	</v-sheet>
</v-container>

</template>
<style>
	.notfound {
		display: flex;
		flex-direction: column;
		margin-top: 48px;
		width: 100%;
		height: min-content;
		justify-content: center;
	}
</style>
<script>
export default {
}
</script>