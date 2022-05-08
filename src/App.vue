<template>
<div id="content">
  <router-view/>
</div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: capitalize;
  // transition: all .4s linear;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #030e1b;
  color: #FFF;
  // height: 1000px;
}

a {
  color: #2aeb74;
  text-decoration: none;
}
button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
