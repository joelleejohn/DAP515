<template>
    <v-app-bar
        app
        color="white"
        flat
        elevation="5"
    >
      <v-container class="py-0 fill-height">
          <div class="logo">ROSANNE FLORISTS</div>
        <div
            v-for="link in links"
            :key="link.text"
        >
            <router-link
                v-if="link.link"
                :to="link.link && link.link"
                class="defaultLink"
            >
                <v-btn text>
                    <v-icon left color="#388539" size="24px" class="padding-right">
                        {{ link.icon }}
                    </v-icon>
                    {{ link.text }}
                </v-btn>
            </router-link>
            <v-menu v-if="link.hasSubmenu" max-height="800px" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        
                        text
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon left color="#388539" size="24px" class="padding-right">
                            {{ link.icon }}
                        </v-icon>
                        {{ link.text }}
                    </v-btn>
                </template>
                <v-sheet min-width="800px" height="720px" class="menu">
                    <v-col v-for="cat in menuItems" :key="cat.title" class="heighted">
                        <v-card-title class="menuSubtitle">{{ cat.title }}</v-card-title>
                        <v-list height="300px" class="scrollable">
                            <v-list-item-content v-for="sub in cat.subItems" :key="sub.text">
                                <router-link
                                    v-if="sub.link"
                                    :to="sub.link"
                                    class="standardLink"
                                >
                                    {{ sub.text }}
                                </router-link>
                                {{ !sub.link ? sub.text : '' }}
                            </v-list-item-content>
                        </v-list>
                    </v-col>
                </v-sheet>
            </v-menu>
        </div>

        <v-spacer></v-spacer>

        <v-icon left color="#388539">
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
.logo {
    font-family: 'Balthazar';
    font-size: 24px;
    font-weight: bold;
    color: #388539;
    margin: 0 15px 0 0;
}

div.menu {
    display: flex;
    flex-direction: row;
    overflow-x: visible;
}

.menuSubtitle.v-card__title {
    font-size: 15px;
    padding: 5px;
    justify-content: center;
}

.heighted {
    height: 720px;
    background-color: white;
    border-right: 1px dashed grey;
}

.srollable {
    height: min-content;
    overflow: scroll;
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
        menuItems: [
            {
                title: 'Gift Occasions',
                link: null,
                subItems: [
                    { text: '‌Local Gift Collection', link: null, },
                    { text: 'Anniversary', link: null, },
                    { text: 'Autumn', link: null, },
                    { text: 'Birthday', link: null, },
                    { text: 'Christmas', link: null, },
                    { text: 'Get Well Soon', link: null, },
                    { text: 'Interflora Designs', link: null, },
                    { text: 'Lily Free Designs', link: null, },
                    { text: 'Local Christmas Collection', link: null, },
                    { text: 'Romance', link: null, },
                    { text: 'Sympathy', link: null, },
                    { text: 'Winter', link: null, },
                    { text: 'With Roses', link: null, },
                ],
            },
            {
                title: 'Gift Designs',
                link: null,
                subItems: [								
                    { text: 'Arrangement', link: null, },
                    { text: 'Handtied', link: null, },
                    { text: 'Plants', link: null, },
                ]
            },
            {
                title: 'Funeral Flowers',
                link: '/funeralflowers',
                subItems: [								
                    { text: 'Local Tributes', link: '/funeralflowers', },
                    { text: 'Interflora Tributes', link: '/funeralflowers', },
                ],
            },
              { title: 'Finishing Touches', 
                subItems: [								
                    { text: 'Chocolates', link: null, },
                    { text: 'Cuddly Toys', link: null, },
                    { text: 'Balloons', link: null, },
                    { text: 'Wine & Champagne', link: null, },
                    { text: 'Vases', link: null, },
                    { text: 'Cards', link: null, },
                ],
              },
        ],
    }),
}
</script>