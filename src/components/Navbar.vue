<template>
  <div class="navbar">
    <nav class=" nav-extended amber darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Samurai Shakes</span>
        </router-link>
        <a class="btn-floating btn-large halfway-fab blue-grey darken-4">
          <router-link to="">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>


