const DragAccessor = {
  _dragId: undefined
}

DragAccessor.getId = function () {
  return this._dragId
}

DragAccessor.setId = function(id) {
  this._dragId = id
}

export default DragAccessor
