<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <router-link class="navbar-item" to="/specs">
            Computer Specs
          </router-link>
          <router-link class="navbar-item" to="/sponsors">
            Sponsors
          </router-link>
          <router-link class="navbar-item" to="/unitetv">
            UniteTV
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
