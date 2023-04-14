import { handleFooterType } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useFooterType = () => {
  const dispatch = useAppDispatch()
  const footerType = useAppSelector((state) => state.layout.footerType)
  const setFooterType = (val: string) => dispatch(handleFooterType(val))
  return [footerType, setFooterType]
}

export default useFooterType
