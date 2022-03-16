<template>
      <router-view />
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style>
.elems-content {
    margin: 25px;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 15px;
}
</style>