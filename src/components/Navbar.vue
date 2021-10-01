<template>
  <CBox
    as="nav"
    h="60px"
    px="4"
    d="flex"
    align-items="center"
    justify-content="space-between"
    shadow="sm"
  >
    <CLink to="/" as="router-link">
      <CBadge
        variant-color="vue"
        variant="solid"
        font-size="0.9em"
        ml="2"
        font-family="mono"
        rounded="md"
        text-transform="uppercase"
      >
        D3
      </CBadge>
    </CLink>
    <CLink to="/arbol" as="router-link">
      <CHeading
        font-size="0.9em"
        ml="2"
        font-family="mono"
        rounded="md"
        :color="colorMode === 'light' ? 'gray.800' : 'whiteAlpha.900'"
        text-transform="lowercase"
      >
        Árbol
      </CHeading>
    </CLink>
    <CBox
      as="ul"
      :color="colorMode === 'light' ? 'gray.500' : 'whiteAlpha.900'"
      d="flex"
      align-items="center"
      list-style-type="none"
      pt="8px"
      pl="16px"
    >
      <CBox as="li">
        <CIconButton
          v-chakra="{
            'svg': { w: '12px', h: '12px' }
          }"
          variant="ghost"
          variant-color="gray"
          :aria-label="'Cambiar a modo ' + colorMode === 'light' ? 'oscuro' : 'claro'"
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          @click="toggleColorMode"
        />
      </CBox>
    </CBox>
  </CBox>
</template>

<script>
import {
  CBox,
  CIconButton,
  CBadge,
  CHeading,
  CLink,
} from '@chakra-ui/vue';

export default {
  name: 'Navbar',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CBadge,
    CIconButton,
    CHeading,
    CLink,
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      console.log('========================');
      console.log('Demando cambiar el color');
      console.log('========================');
      return this.$toggleColorMode;
    },
  },
  watch: {
    colorMode(newVal) {
      if (!process.client) { return; }
      try {
        localStorage.setItem('chakra_color_mode', newVal);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    if (!process.client) { return; }
    try {
      const savedColorMode = localStorage.getItem('chakra_color_mode');
      if (!savedColorMode) { return; }

      if ((savedColorMode && this.colorMode) && (this.colorMode !== savedColorMode)) {
        this.$toggleColorMode();
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>

</style>
