<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-md="material:menu" @click="openLeftPanel"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Supabase Task</f7-nav-title>
    </f7-navbar>
    <!-- Page content-->
    <f7-block>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list strong inset dividersIos>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill popup-open="#my-popup">Popup</f7-button>
      <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill panel-open="left">Left Panel</f7-button>
      <f7-button fill panel-open="right">Right Panel</f7-button>
    </f7-block>

    <f7-list strong inset dividersIos>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
    <f7-block-title>Columns with gap</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-card outline-md class="demo-card-header-pic">
        <f7-card-header
          valign="bottom"
          style="background: teal"
          >Journey To Mountains</f7-card-header
        >
        <f7-card-content>
          <p class="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
            felis. Phasellus quis nibh hendrerit...
          </p>
        </f7-card-content>
        <f7-card-footer>
          <f7-button fill panel-open="left">Like</f7-button>
          <f7-button fill panel-open="right">Read More</f7-button>
        </f7-card-footer>
      </f7-card>
      <f7-card outline-md class="demo-card-header-pic">
        <f7-card-header
          valign="bottom"
          style="background: azure"
          >Journey To Mountains</f7-card-header
        >
        <f7-card-content>
          <p class="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
            felis. Phasellus quis nibh hendrerit...
          </p>
        </f7-card-content>
        <f7-card-footer>
          <f7-block class="grid grid-cols-2 grid-gap">
          </f7-block>
          <f7-link>Like</f7-link>
          <f7-link>Read more</f7-link>
        </f7-card-footer>
      </f7-card>
    </f7-block>
    <f7-panel left cover theme-dark>
      <f7-page>
        <f7-list menu-list strong-ios outline-ios>
          <f7-list-item
            link
            title="Home"
            :selected="selected === 'about'"
            @click="() => (selected = 'about')"
          >
            <template #media>
              <f7-icon f7="house" size="24px"></f7-icon>
            </template>
          </f7-list-item>
          <f7-list-item
            link
            title="Profile"
            :selected="selected === 'profile'"
            @click="() => (selected = 'profile')"
          >
            <template #media>
              <f7-icon md="material:person" ios="f7:person_fill" />
            </template>
          </f7-list-item>
          <f7-list-item
            link
            title="Settings"
            :selected="selected === 'settings'"
            @click="() => (selected = 'settings')"
          >
            <template #media>
              <f7-icon md="material:settings" ios="f7:gear_alt_fill" />
            </template>
          </f7-list-item>
        </f7-list>
        <!-- Sticky button at the bottom -->
        <div class="panel-bottom-button">
          <f7-list strong inset dividersIos>
            <f7-button preloader :loading="isLoading" large fill @click="logout">Logout</f7-button>
          </f7-list>
        </div>
      </f7-page>
    </f7-panel>
  </f7-page>
</template>

<script>
import supabase from '../js/supabase';
import { f7 } from 'framework7-vue';
export default {
  data() {
      return {
          isLoading: false
      };
  },
  methods: {
    openLeftPanel() {
      f7.panel.open('left');
    },
    logout() {
      this.isLoading = true;
      try {
        supabase.auth.signOut();
        // localStorage.removeItem('access_token');
        // localStorage.removeItem('user');

        this.isLoading = false;
        f7.panel.close('left');
        f7.views.main.router.navigate('/login/');
      } catch (error) {
        this.isLoading = false;
        f7.panel.close('left');
        f7.views.main.router.navigate('/login/');
        console.error('Error logging out:', error);
      }
    },
  },
};
</script>
<style scoped>
  /* Add some styling for the sticky button */
  .panel-bottom-button {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    text-align: center;
  }
</style>