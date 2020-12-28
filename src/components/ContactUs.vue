<template>
<v-container>
	<h1>Contact Us</h1>
	<v-sheet class="contactus">
		<v-container class="contact-details">
			<v-container class="contact-details">
				<v-col cols="6">
					<v-list>
						<v-subheader>Opening Hours</v-subheader>
						<v-list-item>
							<p>Monday - Thursday <em>8.30 - 5.30</em></p> 
						</v-list-item>
						<v-list-item>
							<p>Friday <em>8.30 - 6.00 </em></p>
						</v-list-item>	
						<v-list-item>
							<p>Saturday <em>8.30 - 4.30</em></p>
						</v-list-item>
						<v-list-item>
							<p>Sunday <em>Closed</em></p>
						</v-list-item>
					</v-list>
				</v-col>
				<v-col cols="6">
					<v-list>
						<v-subheader>Contact Information</v-subheader>
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
			</v-container>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.403790521823!2d-0.1287255840901796!3d50.95323825888921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758c489df26ee9%3A0x2d615c4874dd8f0b!2sRosanne%20Florists!5e0!3m2!1sen!2suk!4v1609106964396!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</v-container>
		<v-divider></v-divider>
		<v-card class="form">
			<v-card-title>
				Send us a comment or question
			</v-card-title>
			<v-form v-model="form" ref="form" :disabled="hasSubmitted">
				<v-text-field
					v-model="name"
					:rules="nameRules"
					:counter="30"
					label="Name"
					validate-on-blur
				></v-text-field>
				<v-text-field
					v-model="email"
					:rules="emailRules"
					label="Email Address"
					type="email"
					aria-required="true"
					required
					validate-on-blur
				></v-text-field>
				<v-text-field
					v-model="phoneNumber"
					label="Phone Number"
					:rules="phoneRules"
					type="tel"
					validate-on-blur
				></v-text-field>
				<v-textarea outlined v-model="comments" :counter="200" :rules="commentsRules" label="Comments" type="text" validate-on-blur>
					
				</v-textarea>
				<v-btn :dark="!hasSubmitted" color="#388539" @click="submit" :disabled="hasSubmitted">
					<v-icon>mdi-check</v-icon>
					Submit
				</v-btn>
				<v-btn :dark="!hasSubmitted" color="grey" class="buttons" @click="clear" :disabled="hasSubmitted">
					<v-icon>mdi-close</v-icon>
					Clear
				</v-btn>
			</v-form>
		</v-card>
	</v-sheet>
</v-container>

</template>
<style>
	.contactus {
		display: flex;
		flex-direction: column;
		margin-top: 48px;
		width: 100%;
		height: min-content;
		justify-content: center;
	}
	.contact-details {
		display: flex;
		width: 100%;
		min-height: 300px;
	}
	.overview {
		display: grid;
		grid-auto-flow: row;
	}
	.form {
		width: 40%;
		padding: 15px;
		justify-self: center;
		margin: 30px;
	}
	.buttons {
		margin: 10px;
	}
</style>
<script>

function phoneValidation (value){
	/* eslint-disable no-useless-escape*/
	return new RegExp(/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g).test(value);
	/* eslint-enable no-useless-escape*/
}
export default {
	data: () => ({
		form: false,
		name: '',
		email: '',
		emailRules: [
			val => val?.toString().includes('@') && val?.toString().includes('.') || 'Email address invalid'
		],
		nameRules: [
			val => val?.length > 0 || 'Please enter a name',
			val => val?.length < 30 || 'Name must be less than 30 characters',
		],
		phoneNumber: '',
		phoneRules: [
			val => phoneValidation(val) || 'Please enter a valid phone number'
		],
		comments: '',
		commentsRules: [
			val => val?.length > 0 || 'Please enter a query or comment',
			val => val?.length <= 200 || 'Comment or query must be less than or equal to 200 characters'
		],
		hasSubmitted: false,
	}),
	methods: {
		submit: function () {
			if (!this.hasSubmitted){
				this.$gtag.event('send_comment');
				this.hasSubmitted = true;
			}
		},
		clear: function () {
			this.$refs.form.reset();
		},
	}
}
</script>