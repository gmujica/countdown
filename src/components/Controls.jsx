import React from 'react'

const Controls = ({paused, onPauseToggle}) =>
  <div className="field is-grouped is-grouped-centered is-medium">
    <p className="control">
      <button className="button is-danger is-outlined is-rounded"
              disabled={paused}
              onClick={onPauseToggle}>
        Pause
      </button>
    </p>
    <p className="control">
      <button className="button is-success is-outlined is-rounded"
              disabled={!paused}
              onClick={onPauseToggle}>
        Resume
      </button>
    </p>
  </div>

export default Controls
