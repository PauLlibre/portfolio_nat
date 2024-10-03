"use client"

import Image from "next/image";
import Nat from "../../../public/images/natB.jpeg";
import { Playfair_Display } from 'next/font/google';
import { useState, useEffect } from 'react';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const quotes = [
    {
      quote: "When one empathizes with another, the experience is an affirmation of her existence and a celebration of her life. Empathetic moments are the most intensively alive experiences we ever have. We feel super-alive because in the empathic act, which begins with being embodied, we “transcend” our physical confines and, for a brief period, live in a shared noncorporeal plane that is timeless and that connects us to the life that surrounds us. We are filled with life, our own and others, connected and embedded in the here and now reality that our relationships create.",
      reference: "― Jeremy Rifkin, The Empathic Civilization: The Race to Global Consciousness in a World in Crisis"
    },
    {
      quote: "Being able to feel safe with other people is probably the single most important aspect of mental health; safe connections are fundamental to meaningful and satisfying lives.",
      reference: "― Bessel A. van der Kolk, The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma"
    },
    {
      quote: "The mind needs to be reeducated to feel physical sensations, and the body needs to be helped to tolerate and enjoy the comforts of touch. Individuals who lack emotional awareness are able, with practice, to connect their physical sensations to psychological events. Then they can slowly reconnect with themselves.",
      reference: "― Bessel A. van der Kolk, The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma"
    },
    {
      quote: "We have learned that trauma is not just an event that took place sometime in the past; it is also the imprint left by that experience on mind, brain, and body. This imprint has ongoing consequences for how the human organism manages to survive in the present. Trauma results in a fundamental reorganization of the way mind and brain manage perceptions. It changes not only how we think and what we think about, but also our very capacity to think.",
      reference: "― Bessel A. van der Kolk, The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma"
    },
    {
      quote: "Neuroscience research shows that the only way we can change the way we feel is by becoming aware of our inner experience and learning to befriend what is going inside ourselves.",
      reference: "― Bessel A. van der Kolk, The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma"
    },
    {
      quote: "For years mental health professionals taught people that they could be psychologically healthy without social support, that “unless you love yourself, no one else will love you.”…The truth is, you cannot love yourself unless you have been loved and are loved. The capacity to love cannot be built in isolation.",
      reference: "― Bruce D. Perry, The Boy Who Was Raised as a Dog: And Other Stories from a Child Psychiatrist's Notebook"
    },
    {
      quote: "The truth is, you cannot love yourself unless you have been loved and are loved. The capacity to love cannot be built in isolation.",
      reference: "― Bruce D. Perry, The Boy Who Was Raised as a Dog: And Other Stories from a Child Psychiatrist's Notebook"
    }
  ];
  
export default function Resume() {
    const [randomQuote, setRandomQuote] = useState({ quote: '', reference: '' });

    useEffect(() => {
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setRandomQuote(selectedQuote);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start h-screen w-1/3 gap-10 pt-20">
            <h1 className={`${playfairDisplay.className} text-8xl font-bold text-center`}>Natalia Berlin</h1>
            <h2 className={`${playfairDisplay.className} text-4xl font-bold text-center max-w-1/2 pl-20 pr-20`}>Psicóloga Sanitaria Integradora</h2>
            <p className={`${playfairDisplay.className} text-2xl text-center p-8 ml-10 mr-10`}>Terapeuta corporal, holistic coach, workshops.</p>
            <Image src={Nat} alt="Natalia Bertran" className="w-3/5 h-1/3 object-cover" />
            <div className={`${playfairDisplay.className} text-sm text-center italic p-4 max-w-2xl pl-20 pr-20`}>
                <p>{randomQuote.quote}</p>
                <p className="mt-2 text-sm">{randomQuote.reference}</p>
            </div>
        </div>
    );
}