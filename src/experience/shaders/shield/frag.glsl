varying float vIntensity;
varying vec2 vUv;

uniform vec3 uColor;
uniform sampler2D uNoiseTexture;
uniform float uTime;


void main() {

  vec2 nuv = vUv;

  nuv.y += uTime * 0.3;
  
  vec4 noiseColor = texture2D(uNoiseTexture, nuv);

  gl_FragColor = vec4(noiseColor.rgb * vIntensity * uColor * 5.0, 1.0);
}