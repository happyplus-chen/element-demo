<template>
  <div>
    <div class="loading-parent">
     <div class="spin">
         <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
.loading-parent {
  position: absolute;
  z-index: 10000;
  background-color: hsla(0, 19%, 63%, 1);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}
.spin {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
</style>
