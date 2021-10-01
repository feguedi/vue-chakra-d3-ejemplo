<template>
  <transition mode="out-in" name="fade">
    <div class="container">
      <CBox
        font-family="body"
        as="main"
        :bg="colorMode === 'light' ? 'white' : 'gray.800'"
        :color="colorMode === 'light' ? 'gray.800' : 'gray.50'"
      >
        <Navbar />
        <CBox as="main" :px="[4, 10, '12rem']" :bg="'red'">
            <router-view/>
        </CBox>
      </CBox>
    </div>
  </transition>
</template>

<script>
import {
  CBox,
} from '@chakra-ui/vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
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
