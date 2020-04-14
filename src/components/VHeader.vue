<template>
  <div class="navbar">
    <nav class="nav-extended darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">StrategEASE</span>
        </router-link>
        <a href="" class="">
          <router-link :to="{ name: '' }">
            <i class="mybut large material-icons ">menu</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "vheader",
  data() {
    return {
      title: "Strategease",
      links: ["Username", "Login/Logout"]
    };
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  background: #14b49e 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 0px 41px;
  opacity: 1;
}
.nav-extended {
  background-color: #373f51;
}
.mybut {
  color: white;
  position: absolute;
  top: 20%;
  left: 95%;
  width: 78px;
  height: 44px;
  opacity: 1;
  font-size: 30px;
}
</style>
