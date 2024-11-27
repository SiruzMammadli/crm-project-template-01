import { LayoutContainer, Sidebar } from "@/components/main-layout"

export default (
    {children}: Readonly<React.PropsWithChildren>
) => {
    return (
        <div className="grid grid-cols-[250px_1fr] gap-x-[12px] h-dvh overflow-hidden p-[8px]">
            <Sidebar/>
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    )
}