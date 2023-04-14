import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { handleDarkMode } from '@/redux/layout'

const useDarkmode = () => {
  const dispatch = useAppDispatch()
  const isDark = useAppSelector((state) => state.layout.darkMode)

  const setDarkMode = (mode: any) => {
    dispatch(handleDarkMode(mode))
  }

  return [isDark, setDarkMode]
}

export default useDarkmode
