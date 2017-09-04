export default class AlignmentHelper {

  constuctor () {
    this.rects = []
  }

  destroy () {
    this.rects = []
  }

  addRect () {}

  removeRect () {}

  setRect (rects) {
    if (!(rects instanceof Array)) {
      throw new Error('setRect() needs an array of the 1st parameter')
    }
    this.rects = rects
  }

  getHelperLines () {}

  getNearByRectangles () {}

  static align () {}

  static top () {}

  static bottom () {}

  static right () {}

  static left () {}

  static vCenter () {}

  static hCenter () {}

  static distribute () {}

  static vDistribute () {}

  static hDistribute () {}
}

class Rectangle {
  constructor (x = 0, y = 0, w = 0, h = 0) {}
}

AlignmentHelper.Rectangle = Rectangle
