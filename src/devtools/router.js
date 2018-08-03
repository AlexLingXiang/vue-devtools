import Vue from 'vue'
import VueRouter from 'vue-router'

import ComponentsTab from './views/components/ComponentsTab.vue'
import VuexTab from './views/vuex/VuexTab.vue'
import EventsTab from './views/events/EventsTab.vue'
import PerfTab from './views/perf/PerfTab.vue'
import ComponentRenderStats from './views/perf/ComponentRenderStats.vue'
import FramesPerSecondGraph from './views/perf/FramesPerSecondGraph.vue'
import SettingsTab from './views/settings/SettingsTab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'components' }
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsTab
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexTab
  },
  {
    path: '/events',
    name: 'events',
    component: EventsTab
  },
  {
    path: '/perf',
    component: PerfTab,
    name: 'perf',
    children: [
      {
        path: 'fps',
        name: 'fps',
        component: FramesPerSecondGraph
      },
      {
        path: 'component-render',
        name: 'component-render',
        component: ComponentRenderStats
      }
    ]
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsTab
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
