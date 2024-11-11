import { defineComponent, h } from 'vue'
import { Icon } from '@/core/icon'
import Menu from '../menu.vue'

/**
 * 加粗菜单
 */
export const BoldMenu = defineComponent(() => {
	return () => {
		return h(
			Menu,
			{
				onOperate() {
					console.log('点击加粗按钮')
				}
			},
			{
				default: () => h(Icon, { value: 'bold' })
			}
		)
	}
})
