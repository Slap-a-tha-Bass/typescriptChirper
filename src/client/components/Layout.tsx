import * as React from 'react';

const Layout: React.FC<IAppProps> = ({ children }) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-2">{children}</section>
        </main>
    )
}
export interface ILayoutProps {
    children: React.ReactNode;
}

interface IAppProps {
}

export default Layout;
