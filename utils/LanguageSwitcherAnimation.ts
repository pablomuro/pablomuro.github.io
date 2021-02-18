import { TweenLite } from 'gsap'

const transitionTime = 0.7

interface VoidFn {
  (): void
}

interface BooleanFn {
  (): boolean
}

export interface ILanguageSwitcherAnimation {
  animateHover: VoidFn
  isHoverActive: BooleanFn
  animateLeave: VoidFn
  isLeaveActive: BooleanFn
}

export class LanguageSwitcherAnimation {
  private hoverTransition: TweenLite
  private leaveTransition: TweenLite
  private languageName: HTMLElement
  private selectArrows: HTMLElement
  private languageButton: HTMLElement
  constructor({
    languageName,
    selectArrows,
    languageButton,
  }: {
    languageName: HTMLElement
    selectArrows: HTMLElement
    languageButton: HTMLElement
  }) {
    this.languageName = languageName
    this.selectArrows = selectArrows
    this.languageButton = languageButton

    this.hoverTransition = TweenLite.to(
      [this.languageName, this.selectArrows],
      transitionTime,
      {
        'max-width': '70px',
        'margin-left': '0.75rem',
      }
    )
    this.leaveTransition = TweenLite.to(
      [this.languageName, this.selectArrows],
      transitionTime,
      {
        'max-width': 0,
        margin: 0,
      }
    )

    languageName.style.maxWidth = '0'
    languageName.style.maxHeight = '0'

    selectArrows.style.margin = '0'
    selectArrows.style.maxWidth = '0'
    selectArrows.style.maxHeight = '0'
  }

  animateHover(): void {
    this.languageName.style.maxHeight = '100%'
    this.selectArrows.style.maxHeight = '100%'

    this.languageButton.classList.add('pr-10')

    this.hoverTransition.restart()
  }

  isHoverActive(): boolean {
    return this.hoverTransition.isActive()
  }

  animateLeave(): void {
    this.languageButton.blur()
    this.languageButton.classList.remove('pr-10')

    this.selectArrows.style.maxWidth = '0'

    this.leaveTransition.restart()

    this.languageName.style.maxHeight = '0'
  }

  isLeaveActive(): boolean {
    return this.leaveTransition.isActive()
  }
}
