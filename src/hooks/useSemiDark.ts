import { handleSemiDarkMode } from '@/redux/layout'

import { useAppDispatch, useAppSelector } from './useRedux'

const useSemiDark = () => {
  const dispatch = useAppDispatch()
  const isSemiDark = useAppSelector((state) => state.layout.semiDarkMode)

  const setSemiDark = (val: boolean) => dispatch(handleSemiDarkMode(val))

  return [isSemiDark, setSemiDark]
}

export default useSemiDark
