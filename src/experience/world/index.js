import Experience from '@/experience'
import Environment from './Environment'
import Shield from './shield'

export default class World {
  constructor() {
    this.experience = Experience.getInstance()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer.instance
    this.time = this.experience.time

    this.resource.on('ready', () => {
      this.environment = new Environment()
      this.shield = new Shield()
    })
  }

  update() {
    this.shield && this.shield.update()
  }

  resize() {}
}
