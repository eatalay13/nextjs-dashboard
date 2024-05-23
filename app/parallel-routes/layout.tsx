import { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
    main: React.ReactNode;
    sidebar: React.ReactNode;
}

export default function Layout({ children, main, sidebar }: LayoutProps) {
    return (
        <div className="flex w-full h-full">
            <div className="w-1/4">
                {sidebar}
            </div>
            <div className="w-3/4">
                {children}
                {main}
            </div>
        </div>
    );
}