import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top part"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Bottom part"
                />
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}