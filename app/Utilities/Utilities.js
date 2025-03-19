import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

let darcoLoader;
export const DarcoLoader = {
    instance: () => darcoLoader ?? (() => {
        darcoLoader = new DRACOLoader();
        return darcoLoader;
    })(),
};