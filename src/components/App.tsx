import React, { useEffect } from 'react'
import { launchGame } from '@/phaserGame'

export const App = () => {
    useEffect(() => {
        launchGame()
    }, [])

    return <></>
}

export default App
