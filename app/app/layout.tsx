import MainLayout from "@/pages/layouts/MainLayout"

export default ({children}: Readonly<React.PropsWithChildren>) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}