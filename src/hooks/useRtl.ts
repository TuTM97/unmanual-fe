import { handleRtl } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useRtl = () => {
  const dispatch = useAppDispatch()
  const isRtl = useAppSelector((state) => state.layout.isRTL)

  const setRtl = (val: boolean) => dispatch(handleRtl(val))

  return [isRtl, setRtl]
}

export default useRtl
