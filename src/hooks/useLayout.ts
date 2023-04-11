import {
  changeLayoutBegin,
  changeLayoutErr,
  changeLayoutSuccess,
  changeMenuBegin,
  changeMenuErr,
  changeMenuSuccess,
  changeRtlBegin,
  changeRtlErr,
  changeRtlSuccess,
} from '@/redux/layout';

import { useAppDispatch } from './useRedux';

const useLayout = () => {
  const dispatch = useAppDispatch();

  const changeLayoutMode = (value: string) => {
    return async () => {
      try {
        dispatch(changeLayoutBegin());
        dispatch(changeLayoutSuccess(value));
      } catch (err: any) {
        dispatch(changeLayoutErr(err));
      }
    };
  };

  const changeDirectionMode = (value: boolean) => {
    return async () => {
      try {
        dispatch(changeRtlBegin());
        dispatch(changeRtlSuccess(value));
      } catch (err: any) {
        dispatch(changeRtlErr(err));
      }
    };
  };

  const changeMenuMode = (value: boolean) => {
    return async () => {
      try {
        dispatch(changeMenuBegin());
        dispatch(changeMenuSuccess(value));
      } catch (err: any) {
        dispatch(changeMenuErr(err));
      }
    };
  };

  return {
    changeLayoutMode,
    changeDirectionMode,
    changeMenuMode,
  };
};

export default useLayout;
