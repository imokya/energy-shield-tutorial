import { AdditiveBlending, Color, ShaderMaterial } from 'three'
import fragmentShader from '@/experience/shaders/shield/frag.glsl'
import vertexShader from '@/experience/shaders/shield/vert.glsl'

export default class ShieldMaterial {
  constructor() {
    const material = new ShaderMaterial({
      uniforms: {
        uThickness: {
          value: 0,
        },
        uNoiseTexture: {
          value: null,
        },
        uColor: {
          value: new Color(0x336622),
        },
        uTime: {
          value: 0,
        },
      },
      fragmentShader,
      vertexShader,
      transparent: true,
      blending: AdditiveBlending,
    })
    return material
  }
}
