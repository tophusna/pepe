import { Button } from "@material-tailwind/react"

const ImgButton = ({ className, children, ...others }) => {
    return (
        <Button
            variant="filled"
            className={`p-0 ${className}`}
            {...others}
        >
            {children}
        </Button>
    )
}

export default ImgButton