<template>
  <v-app id="inspire">
    <v-dialog persistent v-model="isCookieMissing" width="min-content">
    <v-card width="500px" height="min-content">
          <v-card-title class="headline">
            Privacy Policy
          </v-card-title>
          <v-card-text><p>Our website uses cookies to allow basic function, such as adding items to the basket, logging into an account, or other persistent information.</p>
          <p> We also use third party cookies to analyse traffic in order to make our site better for our customers and for you. These third party cookies are optional and you can choose to reject these cookies.</p>
          Our cookies are kept for one year and you can remove them by heading to our cookie policy and privacy policy pages.<br> 
          Full details on our privacy and cookie polices can be viewed on the <a class="standardLink" href="https://www.rosanneflorists.com/privacy-policy.htm" target="blank">Privacy Policy</a> & <a class="standardLink" href="https://www.rosanneflorists.com/cookie-policy.htm" target="blank">Cookie Policy</a> pages.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click.stop="rejectCookies()"
            >
              Reject Optional Cookies
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click.stop="acceptCookies()"
            >
              Accept Optional Cookies
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="9" offset=1 align-self="center">
            <v-sheet
              min-height="70vh"
              rounded="lg"
              id="contentSheet"
              elevation="6"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
          <v-col cols="1"><router-view name="sidebar"></router-view></v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<style>
  #contentSheet {
    height: min-content;
  }

  .v-dialog.v-dialog--active.v-dialog--persistent {
    display: flex;
    justify-content: center;
  }

  .standardLink {
    text-decoration-line: none;
  }
</style>
<script>
import AppBar from './components/AppBar.vue';
import Footer from './components/Footer.vue';
import { setOptions, bootstrap } from 'vue-gtag'

const cookieName = 'isCookieAccepted';

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue) {
  let date = new Date();

  // set the cookie expiry for a year
  date.setTime(date.getTime() + (365*24*60*60*1000));

  let expiry = "expires="+ date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expiry + ";path=/";
}

  export default {
    components: { AppBar, Footer },
    data: () => ({
      isCookieAccepted: null,
      isCookieMissing: true,
    }),
    beforeCreate() {
      this.$nextTick(function () {
        let cvalue = getCookie(cookieName);
        if (cvalue){
          this.isCookieMissing = false;
          if (cvalue === "0"){
            this.isCookieAccepted = false;
          }
          else {
            this.isCookieAccepted = true;
            this.enablePlugin();
          }
      }
      })
    },
    methods: {
      acceptCookies: function () {
        this.isCookieAccepted = true;
        this.isCookieMissing = false;
        setCookie(cookieName, '1');
        this.enablePlugin();
      },
      rejectCookies: function () {
        this.isCookieAccepted = false;
        this.isCookieMissing = false;
        setCookie(cookieName, '0');
      },
      enablePlugin () {
        setOptions({ enabled: true });
        /* eslint-disable no-unused-vars */
        bootstrap().then(gtag => {
          // all done!
        })
        /* eslint-enable no-unused-vars */
      }
    }
  }
</script>