<template>
  <CBox
    as="nav"
    h="60px"
    px="4"
    d="flex"
    align-items="center"
    shadow="sm"
  >
    <CBadge
      variant-color="vue"
      variant="solid"
      font-size="0.9em"
      ml="2"
      font-family="mono"
      rounded="md"
      text-transform="lowercase"
    >
      D3
    </CBadge>
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
          @click="$toggleColorMode"
        />
      </CBox>
    </CBox>
  </CBox>
</template>

<script>
import {
  CBox,
  CIconButton,
  CBadge
} from '@chakra-ui/vue';

export default {
  name: 'Navbar',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CBadge,
    CIconButton,
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
  watch: {
    colorMode (newVal) {
      if (!process.client) { return; }
      try {
        localStorage.setItem('chakra_color_mode', newVal);
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    if (!process.client) { return; }
    try {
      const savedColorMode = localStorage.getItem('chakra_color_mode');
      if (!savedColorMode) { return; }

      if ((savedColorMode && this.colorMode) && (this.colorMode !== savedColorMode))
        this.$toggleColorMode();
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>

</style>