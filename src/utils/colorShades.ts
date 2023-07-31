function generateShades(baseColor: string, numberOfShades: number): string[] {
    // Function to convert a color to HSL format
    function hexToHSL(hex: string): number[] {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
  
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h, s;
      const l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    }
  
    // Function to convert HSL back to hexadecimal format
    function hslToHex(h: number, s: number, l: number): string {
      const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
      const r = s === 0 ? l : l < 0.5 ? l * (1 + s) : l + s - l * s;
      const g = s === 0 ? l : l < 0.5 ? l * (1 + s) : l + s - l * s;
      const b = s === 0 ? l : l < 0.5 ? l * (1 + s) : l + s - l * s;
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
  
    const hslColor = hexToHSL(baseColor);
    const shades: string[] = [];
  
    // Calculate the step between each shade based on the number of shades required
    const lightnessStep = 1 / (numberOfShades - 1);
  
    // Generate the shades by adjusting the lightness value in the HSL color
    for (let i = 0; i < numberOfShades; i++) {
      const lightness = hslColor[2] + lightnessStep * i;
      const shadeHex = hslToHex(hslColor[0], hslColor[1], lightness);
      shades.push(shadeHex);
    }
  
    return shades;
  }
