<template>
  <CFlex flex-dir="column">
    <CBox>
      <CHeading as="h2">Mi árbol de gráficas</CHeading>
    </CBox>
  </CFlex>
</template>

<script>
import {
  CFlex,
  CBox,
  CHeading,
} from '@chakra-ui/vue';

export default {
  name: 'arbol',
  components: {
    CFlex,
    CBox,
    CHeading,
  },
  mounted() {
    console.log('Arbol.vue montado');
  },
};
</script>
