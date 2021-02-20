<template>
  <div v-click-outside="closeDropdown" class="relative w-max">
    <span
      class="language-box inline-block rounded-md shadow-sm"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <button
        ref="languageButton"
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="language-btn custom-select pr-0"
        @click="openDropdown"
      >
        <div class="flex items-center space-x-3">
          <flag :iso="getCoutry(selectedLocale)" :squared="true" />
          <span
            ref="languageName"
            class="language-name overflow-clip overflow-hidden max-w-0 max-h-0 ml-0"
          >
            {{ selectedLocale.name }}
          </span>
        </div>
        <span
          ref="selectArrows"
          class="arrows absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none max-w-0 ml-0"
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
        class="max-h-56 rounded-md text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
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

interface IData {
  isOpen: boolean
  isHover: boolean
  currentLocale: string
  languageName: HTMLElement | null
  selectArrows: HTMLElement | null
  languageButton: HTMLElement | null
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
      currentLocale: this.$i18n.defaultLocale ?? 'en',
      languageName: null,
      selectArrows: null,
      languageButton: null,
    }
  },
  computed: {
    locales(): any {
      return this.$i18n.locales
    },
    selectedLocale(): any {
      const currentLocale = this.currentLocale
      return { ...this.$i18n.localeProperties, currentLocale }
    },
    filterLocales(): Array<unknown> {
      if (this.currentLocale && this.$i18n.locales) {
        return this.$i18n.locales.filter((locale: any) => {
          // @ts-ignore
          if (locale && this.selectedLocale) {
            // @ts-ignore
            return locale.code !== this.selectedLocale.code
          }

          return false
        })
      }

      return []
    },
  },
  mounted() {
    const { languageName, selectArrows, languageButton } = this.$refs as {
      [key: string]: HTMLElement
    }

    this.languageName = languageName
    this.selectArrows = selectArrows
    this.languageButton = languageButton
  },
  methods: {
    openDropdown() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
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
    },
    mouseLeave() {
      if (this.isOpen) {
        this.keepOpen(true)
        return
      }

      this.keepOpen(false)

      this.languageButton?.blur()

      this.isHover = false
    },
    async select(locale: any) {
      this.isOpen = false

      await this.$i18n.setLocale(locale.code)
      this.currentLocale = locale.code

      await this.recomputeLanguage()
      this.closeDropdown()
    },
    async recomputeLanguage() {
      const _this = this as any
      _this._computedWatchers.selectedLocale.run()
      _this._computedWatchers.filterLocales.run()
      await this.$nextTick()
    },
    getCoutry(locale: any): string {
      try {
        const country = locale?.iso.split('-')[1]
        return country
      } catch (e) {
        return locale.code
      }
    },
    keepOpen(keep: boolean): void {
      const maxWidth = keep === true ? '100px' : ''
      const classOperation = keep === true ? 'add' : 'remove'

      if (this.languageName && this.selectArrows && this.languageButton) {
        this.languageName.style.maxWidth = maxWidth
        this.selectArrows.style.maxWidth = maxWidth

        this.languageName.classList[classOperation]('max-h-full', 'ml-3')
        this.selectArrows.classList[classOperation]('max-h-full', 'ml-3')
        this.languageButton.classList[classOperation]('pr-10')
      }
    },
  },
})
</script>

<style languave="postcss" scoped>
.flag-icon {
  width: 20px !important;
  height: 20px;
  border-radius: 100%;
  background-size: cover;
  background-repeat: round;
}

.language-box {
  &:hover {
    .language-name,
    .arrows {
      @apply max-h-full ml-3;
      max-width: 100px;
    }
    .language-btn {
      @apply pr-10;
    }
  }
  .language-name {
    transition: max-width 0.5s ease-in-out, margin-left 0.6s ease-in-out,
      max-height 0.6s ease-in-out;
  }
  .arrows {
    transition: max-width 0.6s ease, max-height 0.3s ease;
  }
  .language-btn {
    transition: padding-right 0.6s ease-in-out;
  }
}
</style>
