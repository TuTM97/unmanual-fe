import { handleContentWidth } from '@/redux/layout'

import { useAppDispatch, useAppSelector } from './useRedux'

const useContentWidth = () => {
  const dispatch = useAppDispatch()
  const contentWidth = useAppSelector((state) => state.layout.contentWidth)

  // ** Toggles Content Width
  const setContentWidth = (val: any) => dispatch(handleContentWidth(val))

  return [contentWidth, setContentWidth]
}

export default useContentWidth
