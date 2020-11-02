import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'xs', // This is equivalent to a value of 600
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.amber.darken2,
        secondary: colors.teal,
        accent: colors.deepPurple,
      },
    },
  },
})
