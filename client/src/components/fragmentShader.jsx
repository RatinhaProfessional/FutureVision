const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    vec3 color1 = vec3(0.451, 0.090, 0.086); // #731716
    vec3 color2 = vec3(0.749, 0.263, 0.141); // #BF4324
    vec3 color3 = vec3(0.820, 0.306, 0.294); // #D14E4B

    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 colorA = mix(color1, color2, vUv.x * (1.0 - distort));
    vec3 finalColor = mix(colorA, color3, vUv.y * (1.0 - distort));

    float alpha = 0.5 + 0.5 * sin(u_time * 0.5 + vDisplacement);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

export default fragmentShader;
