import { handleMenuHidden } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useMenuHidden = () => {
  const dispatch = useAppDispatch()
  const menuHidden = useAppSelector((state) => state.layout.menuHidden)

  const setMenuHidden = (value: boolean) => {
    dispatch(handleMenuHidden(value))
  }

  return [menuHidden, setMenuHidden]
}

export default useMenuHidden
