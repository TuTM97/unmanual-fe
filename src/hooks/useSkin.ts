import { useSelector, useDispatch } from 'react-redux'
import { handleSkin } from '@/redux/layout'
import { useAppDispatch, useAppSelector } from './useRedux'

const useSkin = () => {
  const dispatch = useAppDispatch()
  const skin = useAppSelector((state) => state.layout.skin)

  const setSkin = (mod: string) => dispatch(handleSkin(mod))

  return [skin, setSkin]
}

export default useSkin
