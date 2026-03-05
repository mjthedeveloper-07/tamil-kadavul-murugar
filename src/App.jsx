import React from 'react';
import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';

import Slokas from './components/Slokas';
import Aarupadai from './components/Aarupadai/index';
import Gallery from './components/Gallery';
import Songs from './components/Songs';
import AarupadaiMap from './components/AarupadaiMap';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    useReveal();

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Ticker />
                <About />
                <Slokas />
                <Aarupadai />
                <Gallery />
                <Songs />
                <AarupadaiMap />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
