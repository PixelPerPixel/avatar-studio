import { writable } from "svelte/store";

// Screen
export const screenId = writable<number>(0);

export const faceListId = writable<number>(0);
export const hairListId = writable<number>(0);
export const eyebrowsListId = writable<number>(0);
export const eyesListId = writable<number>(0);
export const noseListId = writable<number>(0);
export const mouthListId = writable<number>(0);
export const moleListId = writable<number>(0);

export const modalId = writable<number>(0);

// Parts
export const faceId = writable<number>(0);
export const blushId = writable<number>(0);
export const hairBId = writable<number>(1);
export const hairFId = writable<number>(0);
export const eyebrowsId = writable<number>(0);
export const eyesId = writable<number>(0);
export const noseId = writable<number>(0);
export const mouthId = writable<number>(0);
export const moleId = writable<number>(0);

// Color
//export const faceColorId = writable<number>(0);
export const hairColorId = writable<number>(3);
export const eyesColorId = writable<number>(5);

// Position
export const eyebrowsPosY = writable<number>(4);
export const eyesPosY = writable<number>(3);
export const nosePosY = writable<number>(4);
export const mouthPosY = writable<number>(4);

export const mole1Flip = writable<boolean>(false);
export const mole1PosX = writable<number>(3);
export const mole1PosY = writable<number>(2);
export const mole2Flip = writable<boolean>(false);
export const mole2PosX = writable<number>(3);
export const mole2PosY = writable<number>(2);

// Distance
export const eyebrowsDist = writable<number>(4);
export const eyesDist = writable<number>(2);

// Angle
export const eyebrowsAngle = writable<number>(3);
export const eyesAngle = writable<number>(2);
