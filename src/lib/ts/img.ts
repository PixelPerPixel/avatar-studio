import { browser } from '$app/environment';

import hair_b_1 from '$lib/img/hair_b/1.webp';
import hair_b_2 from '$lib/img/hair_b/2.webp';
import hair_b_3 from '$lib/img/hair_b/3.webp';
import hair_b_4 from '$lib/img/hair_b/4.webp';

import face_1 from '$lib/img/face/1.webp';
import face_2 from '$lib/img/face/2.webp';
import face_3 from '$lib/img/face/3.webp';
import face_4 from '$lib/img/face/4.webp';

import blush_1 from '$lib/img/blush/1.webp';
import blush_2 from '$lib/img/blush/2.webp';

import eye_l_1 from '$lib/img/eye_l/1.webp';
import eye_l_2 from '$lib/img/eye_l/2.webp';
import eye_l_3 from '$lib/img/eye_l/3.webp';
import eye_l_4 from '$lib/img/eye_l/4.webp';
import eye_l_5 from '$lib/img/eye_l/5.webp';
import eye_l_6 from '$lib/img/eye_l/6.webp';

import eye_r_1 from '$lib/img/eye_r/1.webp';
import eye_r_2 from '$lib/img/eye_r/2.webp';
import eye_r_3 from '$lib/img/eye_r/3.webp';
import eye_r_4 from '$lib/img/eye_r/4.webp';
import eye_r_5 from '$lib/img/eye_r/5.webp';
import eye_r_6 from '$lib/img/eye_r/6.webp';

import eyebrows_1 from '$lib/img/eyebrows/1.webp';
import eyebrows_2 from '$lib/img/eyebrows/2.webp';
import eyebrows_3 from '$lib/img/eyebrows/3.webp';
import eyebrows_4 from '$lib/img/eyebrows/4.webp';

import nose_1 from '$lib/img/nose/1.webp';

import mouth_1 from '$lib/img/mouth/1.webp';
import mouth_2 from '$lib/img/mouth/2.webp';
import mouth_3 from '$lib/img/mouth/3.webp';
import mouth_4 from '$lib/img/mouth/4.webp';
import mouth_5 from '$lib/img/mouth/5.webp';
import mouth_6 from '$lib/img/mouth/6.webp';
import mouth_7 from '$lib/img/mouth/7.webp';
import mouth_8 from '$lib/img/mouth/8.webp';
import mouth_9 from '$lib/img/mouth/9.webp';

import hair_f_1 from '$lib/img/hair_f/1.webp';
import hair_f_2 from '$lib/img/hair_f/2.webp';
import hair_f_3 from '$lib/img/hair_f/3.webp';
import hair_f_4 from '$lib/img/hair_f/4.webp';

import mole_1 from '$lib/img/mole/1.webp';
import mole_2 from '$lib/img/mole/2.webp';

const hair_b = [hair_b_1, hair_b_2, hair_b_3, hair_b_4];
const face = [face_1, face_2, face_3, face_4];
const blush = [blush_1, blush_2];

const mole_e = [mole_1];
const mole_m = [mole_2];

const eye_l = [eye_l_1, eye_l_2, eye_l_3, eye_l_4, eye_l_5, eye_l_6];
const eye_r = [eye_r_1, eye_r_2, eye_r_3, eye_r_4, eye_r_5, eye_r_6];
const eyebrows = [eyebrows_1, eyebrows_2, eyebrows_3, eyebrows_4];

const mouth = [mouth_1, mouth_2, mouth_3, mouth_4, mouth_5, mouth_6, mouth_7, mouth_8, mouth_9];
const nose = [nose_1];
const hair_f = [hair_f_1, hair_f_2, hair_f_3, hair_f_4];

export const srcs: {img: string[], render?: boolean}[] = [
    { img: hair_b, render: true },
    { img: face },
    { img: blush, render: false },
    { img: mole_e, render: false },
    { img: mole_m, render: false },
    { img: eye_l },
    { img: eye_r },
    { img: eyebrows },
    { img: mouth },
    { img: nose },
    { img: hair_f },
];

export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;
export let img: HTMLImageElement[][] = [];

if (browser) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', '500px');
    canvas.setAttribute('height', '500px');
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
}
