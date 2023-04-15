import { handleSidebarCollapsed } from '@/redux/layout'

import { useAppDispatch, useAppSelector } from './useRedux'

const useSidebar = () => {
  const dispatch = useAppDispatch()
  const collapsed = useAppSelector((state) => state.layout.isCollapsed)

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = (val: boolean) =>
    dispatch(handleSidebarCollapsed(val))

  return [collapsed, setMenuCollapsed]
}

export default useSidebar
