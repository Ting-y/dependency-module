'use strict'
class Dependency {
  version () {
    console.log("message from dependency#master")
  }
}

module.exports = Dependency
