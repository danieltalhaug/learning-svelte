import { writable } from 'svelte/store';
import type { poll } from '../common/types';

const PollStore = writable<poll[]>([
    {
        id: "EdmNyOwVF8OHhZm2fafY_",
        question: "Favourite food?",
        options: [
            {
                id: "cl-JMyPaMWAYY4n5wgd4k",
                value: "Tacos",
                count: 4
            },
            {
                id: "1yYee_WLRcRfVCCSl8za8",
                value: "Pizza",
                count: 2
            },
            {
                id: "yDjbl7iYk3fPPy9hy0orc",
                value: "BBQ",
                count: 3
            },
            {
                id: "2zo9yBplLMay1tX6Ipmzh",
                value: "Hamburger",
                count: 9
            }
        ]
    },
    {
        id: "N3MvjvlU-1cRHE5_suEHI",
        question: "Favourite car brand?",
        options: [
            {
                id: "pugHH39eofm5ckQ-UZN-F",
                value: "Ferrari",
                count: 8
            },
            {
                id: "mehMHHZK8W39znFe7F4oC",
                value: "Lamborghini",
                count: 24
            },
            {
                id: "Dj9iHZoOmEsoG3cvHPyQg",
                value: "Aston Martin",
                count: 6
            }
        ]
    }
]);

export default PollStore;