import Experience from '@/experience'

export default class Element {
  constructor() {
    this.experience = Experience.getInstance()
    this.resource = this.experience.resource
    this.camera = this.experience.camera
    this.scene = this.experience.scene
    this.time = this.experience.time
    this.debug = this.experience.debug
    this.world = this.experience.world
  }

  update() {}
  resize() {}
}
