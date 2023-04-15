import { handleMobileMenu } from '@/redux/layout'

import { useAppDispatch, useAppSelector } from './useRedux'

const useMobileMenu = () => {
  const dispatch = useAppDispatch()
  const mobileMenu = useAppSelector((state) => state.layout.mobileMenu)

  // ** Toggles Mobile Menu
  const setMobileMenu = (val: boolean) => dispatch(handleMobileMenu(val))

  return { mobileMenu, setMobileMenu }
}

export default useMobileMenu
