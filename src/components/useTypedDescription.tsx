import { useEffect, useState } from "react"

enum Phase {
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL = 250
const PAUSE_TIME = 1000
const DELETING_INTERVAL = 50


const useTypedDescription = (descriptions: string[]) => {
    const [phase, setPhase] = useState(Phase.Typing)
    const [typedDescription, setTypedDescription] = useState('')
    useEffect(() => {
        switch (phase) {
            case Phase.Typing: {
                const nextTypedDescription = descriptions[0].slice(0, typedDescription.length + 1)

                if (nextTypedDescription === typedDescription) {
                    setPhase(Phase.Pausing)
                    return
                }


                const timeout = setTimeout(() => {
                    setTypedDescription(nextTypedDescription)
                }, TYPING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Deleting: {
                if (!typedDescription) {
                    setPhase(Phase.Typing)
                    return
                }
                const nextRemaining = descriptions[0].slice(
                    0,
                    typedDescription.length - 1
                )

               

                const timeout = setTimeout(() => {
                    setTypedDescription(
                        nextRemaining
                    )
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case Phase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(Phase.Deleting)
                }, PAUSE_TIME)

                return () => clearTimeout(timeout)
        }
    }, [descriptions, typedDescription, phase])

    return typedDescription
}

export default useTypedDescription