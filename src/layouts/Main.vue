<template>
  <div class="container">
    <CBox
      font-family="body"
      as="main"
      :bg="colorMode === 'light' ? 'white' : 'gray.800'"
      :color="colorMode === 'light' ? 'gray.800' : 'gray.50'"
    >
      <Navbar />
      <CBox as="main" :px="[4, 10, '12rem']">
        <router-view />
      </CBox>
    </CBox>
  </div>
</template>

<script>
import {
  CBox,
} from '@chakra-ui/vue';
import Navbar from '../components/Navbar.vue'

export default {
  name: 'MainLayout',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    Navbar,
    CBox,
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    }
  }
};
</script>

<style>

</style>