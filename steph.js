function changeColors() {
    const body = document.body;
    const leftSide = document.querySelector('.container .left_Side');
    const allTextElements = document.querySelectorAll('.container *');

    // Generate random HSL values for background color
    const randomHue = Math.floor(Math.random() * 360);
    const bgColor = `hsl(${randomHue}, 50%, 20%)`; // You can adjust saturation and lightness as needed

    // Calculate luminance to determine if the background is light or dark
    const bodyLuminance = 0.299 * (randomHue / 360) + 0.587 + 0.114;

    // Calculate luminance for the left side background color
    const leftSideLuminance = 0.299 * (randomHue / 360) + 0.587 + 0.114;

    // Set text color based on body and left side luminance
    const bodyTextColor = bodyLuminance > 0.5 ? 'black' : 'white';
    const leftSideTextColor = leftSideLuminance > 0.5 ? 'black' : 'white';

    body.style.backgroundColor = bgColor;
    body.style.color = bodyTextColor;

    // Update left side background color and text color
    leftSide.style.backgroundColor = bgColor;
    leftSide.style.color = leftSideTextColor;

    // Update text color for all text elements
    allTextElements.forEach(element => {
        element.style.color = bodyLuminance > 0.5 ? 'black' : 'white';
    });
}

// Call the function
changeColors();
