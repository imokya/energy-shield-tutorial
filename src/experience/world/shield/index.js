import Element from '@/experience/objects/Element'
import {
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  RepeatWrapping,
  SphereGeometry,
} from 'three'
import ShieldMaterial from '@/experience/materials/ShieldMaterial'

export default class Shield extends Element {
  constructor() {
    super()
    this._init()
  }

  _init() {
    this._createHelper()
    this._createPlayer()
    this._createShield()
    this._createDebug()
  }

  _createDebug() {
    const ui = this.debug.ui
    const engergyFolder = ui.addFolder('Energy Shield')
    engergyFolder
      .addColor(this.material.uniforms.uColor, 'value')
      .name('uColor')
    engergyFolder
      .add(this.material.uniforms.uThickness, 'value')
      .min(0)
      .max(10)
      .step(0.01)
      .name('uThickness')
  }

  _createShield() {
    const texture = this.resource.items.noise1
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    const geometry = new SphereGeometry(1.5, 32, 32)
    const material = new ShieldMaterial()
    material.uniforms.uNoiseTexture.value = texture
    const mesh = new Mesh(geometry, material)
    mesh.position.set(0, 1.5, 0)
    this.scene.add(mesh)
    this.material = material
  }

  _createPlayer() {
    const model = this.resource.items.player.scene
    this.scene.add(model)
  }

  _createHelper() {
    this.gridHelper = new GridHelper()
    this.scene.add(this.gridHelper)
  }

  update() {
    const { elapsed } = this.time
    this.material.uniforms.uTime.value = elapsed
  }
}
