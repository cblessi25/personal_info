// A function to style the doc on different  properties and value.
//  sharp, soft, round
favouriteEdgeStyle('soft');

// space, scary, military, romantic , cowboy, fantasy, superhero

favouriteFruit('space');

// sharp, soft, round

favouriteMode('light');

// favouriteEdgeStyle 

favouriteMovieGenre('regular');






const setDocProperty = (prop, value) => {
    document.documentElement.style.setProperty(prop, value);
}

const favouriteEdgeStyle = (style) => {
    setDocProperty("--image", "var(--" + style + ")");
}

const favouriteMovieGenre = (font) => {
    if (font) {
        setDocProperty("--font", "var(--" + font + ")");
    }
}

const favouriteMode = (mode) => {
    if (mode === "light" || !mode) {
        setDocProperty('--background', 'var(--light)');
        setDocProperty('--text', 'var(--light)');
    }

}

const favouriteFruit = (theme) => {
    if (theme = "pastel") {
        setDocProperty('--light', '#f2f6c3');
        setDocProperty('--dark', '#68c4af');
    } else if (theme === 'muted') {
        setDocProperty('--light', '#4c5b64');
        setDocProperty('--dark', '#45241c');
    } else if (theme === 'love') {
        setDocProperty('--light', '#f06836');
        setDocProperty('--dark', '#ba0001');
    } else if (theme === 'sky') {
        setDocProperty('--light', '#99ccff');
        setDocProperty('--dark', '#3366ff');
    } else if (theme === "forrest") {
        setDocProperty('--light', "#91B247")
        setDocProperty('--dark', "#597C2B")
    } else if (theme === "shiny") {
        setDocProperty('--light', "#2e9afe")
        setDocProperty('--dark', "#02197c")
    } else if (theme === "banana") {
        setDocProperty('--light', "#fbec5d")
        setDocProperty('--dark', "#6b3e26")
    } else if (theme === "watermelon") {
        setDocProperty('--light', "#75b855")
        setDocProperty('--dark', "#ad3838")
    } else if (theme === "tomato") {
        setDocProperty('--light', "#d62e2e")
        setDocProperty('--dark', "#600000")
    } else if (theme === "avocado") {
        setDocProperty('--light', "#6b8c21")
        setDocProperty('--dark', "#704012")
    } else if (theme === "orange") {
        setDocProperty('--light', "#ffca16")
        setDocProperty('--dark', "#f97300")
    } else if (theme === "blueberry") {
        setDocProperty('--light', "#41a8f9")
        setDocProperty('--dark', "#064490")
    } else {
        setDocProperty('--light', "#f5f5f5")
        setDocProperty('--dark', "#222222")
    }



}