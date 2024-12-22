const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    vec3 color1 = vec3(0.451, 0.090, 0.086); // #731716
    vec3 color2 = vec3(0.165, 0.349, 0.349); // #2A5959
    vec3 color3 = vec3(0.820, 0.306, 0.294); // #D14E4B

    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 colorA = mix(color1, color2, vUv.x * (1.0 - distort));
    vec3 finalColor = mix(colorA, color3, vUv.y * (1.0 - distort));

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

export default fragmentShader;
