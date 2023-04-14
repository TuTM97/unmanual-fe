import { handleMonoChrome } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useMonoChrome = () => {
  const dispatch = useAppDispatch()
  const isMonoChrome = useAppSelector((state) => state.layout.isMonochrome)

  const setMonoChrome = (val: boolean) => dispatch(handleMonoChrome(val))

  return [isMonoChrome, setMonoChrome]
}

export default useMonoChrome
