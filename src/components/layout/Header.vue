<template>
  <header class="header">
    <router-link to="/">
      VS-Components
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 12;
  position: sticky;
  top: 0
}
</style>