import '@/styles/globals.css';
import { Header } from '@/components/Header';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Breadcrumbs } from './Breadcrumbs';
import { useState } from 'react';
import LoginPage from './LoginPage';

function App({ Component, pageProps }: AppProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
        <ChakraProvider>
         {isLoggedIn ? (
                <>
                    <Header setIsLoggedIn={setIsLoggedIn}/>
                    <Breadcrumbs />
                    <Component {...pageProps} />;
                </>
            ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} />

            )}
        </ChakraProvider>
        </>
    );
}

export default App;
