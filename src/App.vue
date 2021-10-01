<template>
  <c-box h="100vh" w="100wh" flex-dir="column">
    <Navbar />
    <transition mode="out-in" name="fade">
      <CBox
        font-family="body"
        as="main"
        :bg="colorMode === 'light' ? 'white' : 'gray.800'"
        :color="colorMode === 'light' ? 'gray.800' : 'gray.50'"
      >
        <CBox
          as="main"
          d="flex"
          flex-dir="column"
          align-items="center"
          align-content="center"
          justify-content="center"
          min-height="90vh"
          min-width="90vw"
        >
          <router-view/>
        </CBox>
      </CBox>
    </transition>
  </c-box>
</template>

<script>
import {
  CBox,
} from '@chakra-ui/vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  inject: ['$chakraColorMode'],
  components: {
    Navbar,
    CBox,
  },
  data() {
    return {
      transitionName: 'fade',
    };
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
  mounted() {
    console.log('App.vue montado');
    console.log(`colorMode: ${this.$chakraColorMode}`);
  },
};
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .face-leave-active {
    opacity: 0;
  }
</style>
