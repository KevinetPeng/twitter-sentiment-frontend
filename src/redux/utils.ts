import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const checkStatus = (response: Response) => {
    console.log(response)
	if (response.ok) {
		// response.status >= 200 && response.status < 300
		return response;
	} else {
		throw `Error: ${response.status} ${response.statusText}`;
	}
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector