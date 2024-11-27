import {cn} from "@/lib/utils";

export default ({children, ...props}: Readonly<{
    className?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>
} & React.PropsWithChildren>) => {
    return (
        <form className={cn("w-full", props.className)} onSubmit={props.onSubmit}>
            {children}
        </form>
    )
}