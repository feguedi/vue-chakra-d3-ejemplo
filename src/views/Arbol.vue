<template>
  <main-layout>
    <CFlex>
      <CBox>
        <CHeading as="h2">Mi árbol de gráficas</CHeading>
      </CBox>
    </CFlex>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import {
  CFlex,
  CBox,
  CHeading,
} from '@chakra-ui/vue';

export default {
  name: 'arbol',
  components: {
    MainLayout,
    CFlex,
    CBox,
    CHeading,
  },
  mounted () {
    console.log('Montado');
  }
}
</script>
