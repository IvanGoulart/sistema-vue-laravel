<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" :class="this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''
    " v-bind="$attrs" id="navbarBlur" data-scroll="true">
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />

      <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'" id="navbar">
        <div class="pe-md-3 d-flex align-items-center" :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'">
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" :placeholder="this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
              " />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li v-if="loggedIn" class="nav-item d-flex align-items-center">
            <a id="dropdownProfileMenu" href="#" style="display: contents;"
              :class="`nav-link ${showProfileDropdown ? 'show' : ''}`" data-bs-toggle="dropdown" aria-expanded="false"
              @click="showProfileDropdown = !showProfileDropdown">
              <span class="avatar avatar-sm rounded-circle">
                <img :src="profileImage()" style="object-fit: cover !important;">
              </span>
              <span v-if="this.$store.state.isRTL" class="d-sm-inline d-none text-white p-2">{{ getNameNavbar }}</span>
              <span v-else class="d-sm-inline d-none text-white p-2">{{ getNameNavbar }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow position-absolute mt-0"
              :class="showProfileDropdown ? 'show' : ''" aria-labelledby="dropdownProfileMenu">
              <div class="border-radius-md" style="padding: 0.3rem 1rem;">
                <small>
                  Welcome
                </small>
              </div>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div>
                    <i class="ni ni-circle-08"></i>
                    <router-link :to="{ name: 'User Profile' }" class="ms-2">My Profile</router-link>
                  </div>
                </a>
              </li>
              <hr class="m-2">
              <li>
                <a class="dropdown-item border-radius-md cursor-pointer" @click.prevent="handleLogout">
                  <div>
                    <i class="ni ni-user-run"></i>
                    <span class="ms-2">Logout</span>
                  </div>
                </a>
              </li>
            </ul>
          </li>

          <li v-else class="nav-item d-flex align-items-center">
            <router-link :to="{ name: 'Signin' }" class="px-0 nav-link font-weight-bold text-white" target="_blank">
              <i class="fa fa-user" :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-2'"></i>
              <span v-if="this.$store.state.isRTL" class="d-sm-inline d-none">يسجل دخول</span>
              <span v-else class="d-sm-inline d-none">Sign In</span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a href="#" @click="toggleSidebar" class="p-0 nav-link text-white" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a class="p-0 nav-link text-white" @click="toggleConfigurator">
              <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav"></i>
            </a>
          </li>
          <li class="nav-item dropdown d-flex align-items-center" :class="this.$store.state.isRTL ? 'ps-2' : 'pe-2'">
            <a href="#" class="p-0 nav-link text-white" :class="[showMenu ? 'show' : '']" id="dropdownMenuButton"
              data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu">
              <i class="cursor-pointer fa fa-bell"></i>
            </a>
            <ul class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4" :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton">
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img src="../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user image" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New message</span> from
                        Laur
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img src="../../assets/img/small-logos/logo-spotify.svg"
                        class="avatar avatar-sm bg-gradient-dark me-3" alt="logo spotify" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">New album</span> by
                        Travis Scott
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto avatar avatar-sm bg-gradient-secondary me-3">
                      <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>credit-card</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(453.000000, 454.000000)">
                                <path class="color-background"
                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                  opacity="0.593633743" />
                                <path class="color-background"
                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        Payment successfully completed
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        2 days
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapActions } from "vuex";
import placeholder from "../../assets/img/placeholder.jpg";
import showSwal from "../../mixins/showSwal.js";

export default {
  name: "navbar",
  components: {
    Breadcrumbs
  },
  data() {
    return {
      showMenu: false,
      showProfileDropdown: false
    };
  },
  props: ["minNav", "textWhite"],
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    loggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    getProfileNavbar() {
      return this.$store.getters["profile/me"];
    },
    getNameNavbar() {
      return this.getProfileNavbar?.name
    },
    getImageNavbar() {
      return this.getProfileNavbar?.profile_image;
    },
  },
  mixins: [showSwal],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    profileImage() {
      return this.getImageNavbar ? this.getImageNavbar : placeholder;
    },
    async handleLogout() {
      try {
          await this.$store.dispatch("auth/logout");
      } finally {
          await this.$router.go({ name: "Login" });
      }
    },

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    }
  },
};
</script>
