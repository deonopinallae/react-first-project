import { createElement } from "react";

export default function CurrentYear(){
    return createElement(
        'p',
        {},
        new Date().getFullYear()
    )
}