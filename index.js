let btn = document.getElementById('con');
let inl = document.getElementById('hexInput').value

btn.addEventListener('click',function(){
    hexToRgb(inl)
    convertHexToRgb()
})



// Function to convert hex to RGB
function hexToRgb(hex) {
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, '');

    // Parse hex into RGB components
    let int = parseInt(hex, 16);
    let red = (int >> 16) & 255;
    let green = (int >> 8) & 255;
    let blue = int & 255;

    // Return RGB values as an object
    return { red, green, blue };
}

// Function to handle hex to RGB conversion
function convertHexToRgb() {
    // Get the hex input value and result paragraph element
    let hexInput = document.getElementById('hexInput').value;
    let ans = document.getElementById('result');

    // Validate hex input
    let r = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!r.test(hexInput)) {
        // Display an error message for invalid hex color
        ans.textContent = 'Invalid Hex Color';
        return;
    }

    // Convert hex to RGB
    let rgbValues = hexToRgb(hexInput);

    // Display the result
    ans.textContent = `RGB values: ${rgbValues.red}, ${rgbValues.green}, ${rgbValues.blue}`;
}
