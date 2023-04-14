import { handleNavBarType } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useNavbarType = () => {
  const dispatch = useAppDispatch()
  const navbarType = useAppSelector((state) => state.layout.navBarType)
  const setNavbarType = (val: string) => dispatch(handleNavBarType(val))
  return [navbarType, setNavbarType]
}

export default useNavbarType
