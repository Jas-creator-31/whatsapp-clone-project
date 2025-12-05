import React from "react";
import { setCurrentPage } from "../router";

export default function Page1() {
    return (
        <div>
            <h1>Page 1</h1>
            <button type="button" onClick={setCurrentPage('page2')}>go to page 2</button>
        </div>
    )
}