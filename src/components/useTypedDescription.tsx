import { useEffect, useState } from "react"


const useTypedDescription = (descriptions: string[]) => {
    const [typedDescription, setTypedDescription] = useState('')
    useEffect(() => {
        const nextTypedDescription = description[0].slice(0, typedDescription.length + 1)

        if (nextTypedDescription === typedDescription) return
        const timeout = setTimeout(() => {
            setTypedDescription(description[0].slice(0, typedDescription.length + 1))
        }, 250)

        return () => clearTimeout(timeout)
    }, [descriptions, typedDescription])

    return typedDescription
}