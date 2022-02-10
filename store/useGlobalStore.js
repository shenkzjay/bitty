// hook state
import { useState } from '@hookstate/core'

// persisted state 
import { Persistence } from '@hookstate/persistence';



// init useGlobalStore function
export const useGlobalStore = () => {

    // init globalState 
    const globalState = useState({})


    // check if window is not undefined
    if (typeof window !== 'undefined') {

        // persist global state 
        globalState.attach(Persistence('BITKE_Report_Data'))

        // return globalState
        return globalState

    }
}