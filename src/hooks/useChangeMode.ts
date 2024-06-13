import { useCallback } from 'react';
import { useStore } from './useStore';
import { Mode, StoreKeys } from '../utils';


export const useChangeMode = (): [Mode, (mode: Mode) => void] => {
    const { getItem, setItem } = useStore();

    const mode = getItem(StoreKeys.Mode, Mode.light);
    const setMode = useCallback((newMode: Mode) => {
        setItem(StoreKeys.Mode, newMode);
    }, [setItem,]);

    return [mode, setMode];
};
