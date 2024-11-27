import {Header} from "@/components/main-layout/index";

export default ({children}: Readonly<React.PropsWithChildren>) => {
    return (
        <div className="bg-white border-2 border-secondary-200 rounded-[8px]">
            <Header/>
            <main className="main-height overflow-y-auto p-[24px] [&:not(:only-child)>*:not(:last-child)]:mb-[16px]">
                {children}
            </main>
        </div>
    )
}