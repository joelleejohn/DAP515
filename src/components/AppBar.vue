<template>
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <router-link 
            v-for="link in links"
            :key="link.text"
            :to="link.link"
            class="defaultLink"
        >
            <v-btn text>
                <v-icon left color="#43a047" size="24px" class="padding-right">
                    {{ link.icon }}
                </v-icon>
                {{ link.text }}
            </v-btn>
        </router-link>

        <v-spacer></v-spacer>

        <v-icon left color="#43a047">
          mdi-magnify
        </v-icon>
        <v-responsive max-width="280">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="Search"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>
<style lang="css">
.defaultLink {
    text-decoration: none;
}

.padding-right {
    padding-right: 5px;
}
</style>
<script>
export default {
    data: () => ({
        links: [
            {text: 'Home', icon: "mdi-home", link: "/"},
            {text: 'Products', icon: "mdi-flower-tulip", link: "/funeralflowers"},
            {text: 'Contact Us', icon: "mdi-phone", link: "/contactus"},
            {text: 'Flower Delivery', icon: "mdi-truck-delivery", link: "/404"},
            {text: 'About Us', icon: "mdi-heart", link: "/404"},
        ],
    }),
}
</script>