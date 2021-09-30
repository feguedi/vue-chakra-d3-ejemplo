<template>
  <CThemeProvider>
    <CColorModeProvider v-slot="{ colorMode, toggleColorMode }">
      <CBox
        as="main"
        :bg="colorMode === 'light' ? 'white' : 'gray.800'"
        :color="colorMode === 'light' ? 'gray.800' : 'gray.50'"
        class="root"
      >
        <CHeading mb="50px" pos="absolute" top="3" left="50%" transform="translateX(-50%)" as="h4">Error</CHeading>
        <CReset />
        <CIconButton
          position="fixed"
          top="3"
          :aria-label="`Cambiar a modo ${colorMode === 'light' ? 'oscuro' : 'brillante'}`"
          @click="toggleColorMode"
        >
        </CIconButton>
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>

<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CHeading,
  CReset,
  CBox,
  CIconButton,
} from '@chakra-ui/vue';

export default {
  name: 'xD',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CHeading,
    CReset,
    CBox,
    CIconButton,
  }
}
</script>

<style>

</style>