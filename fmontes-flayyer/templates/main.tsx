import React from 'react';
import { Variable as V, Validator, Static } from '@flayyer/variables';
import { TemplateProps } from '@flayyer/flayyer-types';

import '../styles/tailwind.css';

import angular from '../../public/images/_logos/angular.svg';
import css from '../../public/images/_logos/css.svg';
import dragula from '../../public/images/_logos/dragula.svg';
import fmontes from '../../public/images/_logos/fmontes.svg';
import gatsby from '../../public/images/_logos/gatsby.svg';
import nextjs from '../../public/images/_logos/nextjs.svg';
import react from '../../public/images/_logos/react.svg';
import sass from '../../public/images/_logos/sass.svg';
import stencil from '../../public/images/_logos/stencil.svg';

const logos = {
    angular,
    css,
    dragula,
    gatsby,
    nextjs,
    react,
    sass,
    stencil
};

// import logo from '../static/logo.svg';
import background from '../static/background.jpeg';
import alternative from '../static/alternative.jpeg';

import { Layer } from '../components/layers';

/**
 * Export to enable variables UI on Flayyer.com
 */
export const schema = V.Object({
    title: V.String({ default: '' }),
    image: V.Image({
        title: 'Background image URL',
        examples: [alternative],
        default: background
    }),
    logo: V.Optional(V.String())
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

// Make sure to 'export default' a React component
export default function MainTemplate(props: TemplateProps<Variables>) {
    const { width, height, variables } = props;

    if (!validator.validate(variables)) {
        return <img className="w-full h-full object-cover" src={background} />; // Fallback for invalid variables
    }

    const { title, image, logo } = variables;
    return (
        <>
            <Layer>
                <img className="w-full h-full object-cover" src={image} />
            </Layer>
            <Layer
                className="banner:opacity-60"
                style={{
                    background:
                        'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)'
                }}
            />
            <Layer className="flex flex-col justify-center items-center px-4 py-4 text-white text-center relative">
                <div className="absolute top-2 right-2 bg-white rounded p-1">
                    <img src={(logo && logos[logo]) || fmontes} className="h-6" />
                </div>
                {title && (
                    <h1
                        className="hidden banner:block text-2xl font-bold tracking-tight leading-tight mt-1"
                        style={{ 'text-shadow': 'rgba(0,0,0,0.5) 2px 2px' }}
                    >
                        {title}
                    </h1>
                )}
            </Layer>
        </>
    );
}
