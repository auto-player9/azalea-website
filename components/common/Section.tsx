import { ReactElement } from "react"

export default function Section({children, id, className}: {
    children?: ReactElement | ReactElement[],
    id: string,
    className?: string
}) {
    return (
        <div id={id} className={`py-32 px-4 sm:px-6 lg:px-8 xl:px-16 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </div>
    )
}
