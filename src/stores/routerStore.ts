import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { openTabItem } from '@/types/public'
export const useRouteStore = defineStore(
  'route',
  () => {
    


    //Collapse 折叠面板
    const isCollapse = ref(true)
    const openTab: Ref<openTabItem[]> = ref([]);
    const activeIndex = ref('/dashboard/analysis')
    // 添加tabs
    const add_tabs = (data: openTabItem) => {
      openTab.value.push(data)
    }
    // 删除tabs
    const delete_tabs = (route: string) => {
      let index = 0
      
      
      for (const option of openTab.value) {
        if (option.route === route) {
          break
        }
        index++
      }
      openTab.value.splice(index, 1)
    }

    const set_active_index = (index: string) => {
      activeIndex.value = index
    
      
    }

    //Collapse 折叠面板
    const showCollapse = () => {
      isCollapse.value = !isCollapse.value
    }

    return {
      isCollapse,
      openTab,
      activeIndex,
      
      add_tabs,
      delete_tabs,
      set_active_index,
      showCollapse,
      
    }
  },
  {
    persist: true,
  },
)