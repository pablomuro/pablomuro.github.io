<template>
  <div v-click-outside="closeDropdown" class="relative">
    <span class="inline-block w-full rounded-md shadow-sm">
      <button
        ref="languageButton"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="cursor-pointer relative w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition-all ease-in-out duration-150 sm:text-sm sm:leading-5"
        @click="openDropdown"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <div class="flex items-center space-x-3">
          <flag :iso="getCoutry(selectedLocale)" :squared="true" />
          <span ref="languageName" class="overflow-clip overflow-hidden">
            {{ selectedLocale.name }}
          </span>
        </div>
        <span
          ref="selectArrows"
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </span>

    <!-- Select popover, show/hide based on select state. -->
    <div
      v-show="isOpen"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
    >
      <ul
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
      >
        <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
        <li
          v-for="locale in filterLocales"
          id="listbox-item-0"
          :key="locale.code"
          tabindex="0"
          role="option"
          class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 cursor-pointer hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
          @click.once.stop.prevent="select(locale)"
        >
          <div class="flex items-center space-x-3">
            <flag :iso="getCoutry(locale)" :squared="true" />
            <span class="block truncate font-normal">
              {{ locale.name }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import ClickOutside from 'vue-click-outside'
import { TweenLite } from 'gsap'

const transitionTime = 0.7

export default Vue.extend({
  name: 'LanguageSwitcher',
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpen: false,
      isHover: false,
    }
  },
  computed: {
    locales(): any {
      return this.$i18n.locales
    },
    selectedLocale(): any {
      return this.$i18n.localeProperties
    },
    filterLocales(): any {
      if (this.$i18n.locales) {
        return this.$i18n.locales.filter((locale: any) => {
          if (locale && this.selectedLocale) {
            return locale.code !== this.selectedLocale.code
          }

          return false
        })
      }

      return []
    },
  },
  mounted() {
    // TODO - DOCS GASP - criar vetor de animações, ver se tem animção rodando no mouse enter mouseleave - matar e rodar de novo ou esperar retornar
    // TODO - cor dos select e cor de fundo da escolha de idioma
    // https://greensock.com/docs/v3/GSAP
    const { languageName, selectArrows } = this.$refs as any
    if (languageName.style) {
      languageName.style.margin = '0'
      languageName.style['max-width'] = '0'
      languageName.style['max-height'] = '0'

      selectArrows.style.margin = '0'
      selectArrows.style['max-width'] = '0'
      selectArrows.style['max-height'] = '0'
    }
  },
  methods: {
    openDropdown() {
      this.isOpen = !this.isOpen
    },
    closeDropdown() {
      this.isOpen = false
      if (this.isHover) {
        this.mouseLeave()
      }
    },
    async mouseEnter() {
      this.isHover = true

      const { languageName, selectArrows, languageButton } = this.$refs as any
      if (languageName.style) {
        languageName.style.margin = null
        languageName.style['max-height'] = '100%'

        selectArrows.style.margin = null
        selectArrows.style['max-height'] = '100%'

        languageButton.classList.add('pr-10')

        await TweenLite.to([languageName, selectArrows], transitionTime, {
          'max-width': '70px',
        })
      }
    },
    async mouseLeave() {
      if (this.isOpen) return

      this.isHover = false

      const { languageName, selectArrows, languageButton } = this.$refs as any
      languageButton.blur()
      if (languageName.style) {
        languageButton.classList.remove('pr-10')
        selectArrows.style['max-width'] = '0'
        await TweenLite.to([languageName, selectArrows], transitionTime, {
          'max-width': 0,
          margin: 0,
        })
        languageName.style['max-height'] = '0'
      }
    },
    async select(locale: any) {
      this.isOpen = false

      await this.$i18n.setLocale(locale.code).then(async () => {
        await this.$nuxt.refresh()
      })
    },
    getCoutry(locale: any): string {
      try {
        const country = locale?.iso.split('-')[1]
        return country
      } catch (e) {
        return locale.code
      }
    },
  },
})
</script>

<style languave="scss" scoped>
.flag-icon {
  width: 20px !important;
  height: 20px;
  border-radius: 100%;
  background-size: cover;
  background-repeat: round;
}
</style>
