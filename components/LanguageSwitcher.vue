<template>
  <div v-click-outside="closeDropdown" class="relative">
    <span class="inline-block w-full rounded-md shadow-sm">
      <button
        ref="languageButton"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="custom-select"
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
        <li
          v-for="locale in filterLocales"
          id="listbox-item-0"
          :key="locale.code"
          tabindex="0"
          role="option"
          class="custom-select-li"
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
import {
  LanguageSwitcherAnimation,
  ILanguageSwitcherAnimation,
} from '@/utils/LanguageSwitcherAnimation.ts'

interface IData {
  isOpen: boolean
  isHover: boolean
  buttonTransitions: ILanguageSwitcherAnimation
}

export default Vue.extend({
  name: 'LanguageSwitcher',
  directives: {
    ClickOutside,
  },
  data(): IData {
    return {
      isOpen: false,
      isHover: false,
      // @ts-ignore
      buttonTransitions: {},
    }
  },
  computed: {
    locales(): any {
      return this.$i18n.locales
    },
    selectedLocale(): any {
      return { ...this.$i18n.localeProperties }
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
    const { languageName, selectArrows, languageButton } = this.$refs as any
    this.buttonTransitions = new LanguageSwitcherAnimation({
      languageName,
      selectArrows,
      languageButton,
    })
  },
  methods: {
    openDropdown() {
      this.isOpen = !this.isOpen
      if (!this.isHover) {
        this.mouseEnter()
      }
    },
    closeDropdown() {
      this.isOpen = false
      if (this.isHover) {
        this.mouseLeave()
      }
    },
    mouseEnter() {
      this.isHover = true
      if (this.isOpen || this.buttonTransitions.isHoverActive()) return
      this.buttonTransitions.animateHover()
    },
    mouseLeave() {
      if (this.isOpen || this.buttonTransitions.isLeaveActive()) return

      this.isHover = false

      this.buttonTransitions.animateLeave()
    },
    async select(locale: any) {
      this.isOpen = false

      await this.$i18n.setLocale(locale.code)
      this.recomputeLanguage()
      this.closeDropdown()
    },
    recomputeLanguage() {
      const _this = this as any
      _this._computedWatchers.selectedLocale.run()
      _this._computedWatchers.filterLocales.run()
      this.$forceUpdate()
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
