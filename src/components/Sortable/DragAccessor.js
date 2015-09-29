var _to
var _from
var _placement

const DragAccessor = {
  get to () {
    return _to
  },
  set to (to) {
    _to = to
  },
  get from () {
    return _from
  },
  set from (from) {
    _from = from
  },
  get placement () {
    return _placement
  },
  set placement (placement) {
    _placement = placement
  }
}

export default DragAccessor
