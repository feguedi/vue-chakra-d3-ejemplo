<template>
  <CThemeProvider>
    <CReset />
    <CFlex>
      <CBox>
        <CHeading as="h2">Mi árbol de gráficas</CHeading>
      </CBox>
    </CFlex>
  </CThemeProvider>
</template>

<script>
import {
  CFlex,
  CBox,
  CHeading,
  CThemeProvider,
  CReset,
} from '@chakra-ui/vue';
export default {
  name: 'arbol',
  components: {
    CFlex,
    CBox,
    CHeading,
    CThemeProvider,
    CReset,
  }
}
</script>
