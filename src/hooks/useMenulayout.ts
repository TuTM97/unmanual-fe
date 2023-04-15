import { handleType } from '@/redux/layout'

import { useAppDispatch, useAppSelector } from './useRedux'

const useMenuLayout = () => {
  const dispatch = useAppDispatch()
  const menuType = useAppSelector((state) => state.layout.type)

  const setMenuLayout = (value: string) => {
    dispatch(handleType(value))
  }

  return [menuType, setMenuLayout]
}

export default useMenuLayout
