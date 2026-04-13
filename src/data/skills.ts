import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Typescript from '../assets/icons/typescript.svg';
import React from '../assets/icons/reactjs.svg';
import Astro from '../assets/icons/astro.svg';
import Tailwind from '../assets/icons/tailwind.svg';
import Python from '../assets/icons/python.svg';
import Next from '../assets/icons/next.svg';
import Figma from '../assets/icons/figma.svg';
import Vue from '../assets/icons/vue.svg';
import Angular from '../assets/icons/angular.svg';
import Git from '../assets/icons/git.svg';
import Graphql from '../assets/icons/graphql.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata 
}

export const skills = [
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'React',
    icon: React,
  },
    {
    name: 'Graphql',
    icon: Graphql,
  },{
    name: 'Figma',
    icon: Figma,
  },{
    name: 'Astro',
    icon: Astro,
  },
  {
    name: 'Git',
    icon: Git,
  },
  {
    name: 'Angular',
    icon: Angular,
  },
  {
    name: 'Vue',
    icon: Vue,
  },{
    name: 'Tailwind',
    icon: Tailwind,
  },{
    name: 'Python',
    icon: Python,
  },
  {
    name: 'Next',
    icon: Next,
  },
] as Skill[];