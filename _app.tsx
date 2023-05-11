import '@/styles/globals.css';
import Header from '../components/Header'
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import  Breadcrumbs  from '../components/Breadcrumbs';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Header/>
                <Breadcrumbs/>
                <Component {...pageProps} />;
            </ChakraProvider>
        </>
    );
}

export default App;
