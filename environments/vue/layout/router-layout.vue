<template>
  <n-layout has-sider class="s" :native-scrollbar="false">
    <n-layout-sider
      class="s"
      collapse-mode="width"
      :collapsed-width="12"
      :width="240"
      show-trigger="arrow-circle"
      bordered
    >
      <n-menu :value="menuValue" :options="menuOptions" />
    </n-layout-sider>

    <n-layout-content
      class="s"
      :native-scrollbar="false"
      content-style="padding: 24px;"
    >
      <router-view
    /></n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NMenu, NLayoutContent, NLayoutSider } from 'naive-ui'
import { MenuMixedOption } from 'naive-ui/lib/menu/src/interface'
import { RouterLink, useRouter, RouterView } from 'vue-router'

const menuOptions = ref<MenuMixedOption[]>([])
const router = useRouter()
const menuValue: any = computed(() => router.currentRoute.value.name)
onMounted(() => {
  const routes = router.getRoutes()

  const menu: MenuMixedOption[] = routes
    .filter((route) => route.meta.page)
    .map((route) => {
      return {
        label: () =>
          h(
            RouterLink,
            { to: route.path },
            {
              default() {
                return route.name
              },
            },
          ),
        key: route.name as string,
      }
    })
  // @ts-ignore
  menuOptions.value = menu
})
</script>

<style scoped>
.s {
  @apply min-h-screen relative;
}
</style>
