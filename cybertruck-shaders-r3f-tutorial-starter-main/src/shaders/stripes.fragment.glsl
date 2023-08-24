varying vec2 vUv;
uniform float uMultiplier;
uniform float uAlpha;
uniform vec3 uColorA;
uniform vec3 uColorB;

void main() {
    vec2 mulvUv = mod(vUv * uMultiplier, 1.0);
    float strength = step(0.5, mulvUv.y);
    float alpha = uAlpha;
    vec3 mixColor = mix(uColorA, uColorB, step(0.5, mod(vUv.y * uMultiplier / 2.0, 1.0)));
    gl_FragColor.rgba = vec4(mixColor, min(strength, alpha));
}