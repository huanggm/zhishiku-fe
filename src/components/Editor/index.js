import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'easymde/dist/easymde.min.css'
import EasyMDE from 'easymde'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.mdeRef = React.createRef()
  }

  componentDidMount() {
    this.mde = new EasyMDE({
      element: this.mdeRef.current,
      spellChecker: false,
      shortcuts: {
        save: 'Cmd-S',
      },
      toolbar: [
        'link',
        'image',
        'table',
        '|',
        'preview',
        'side-by-side',
        'fullscreen',
        'guide',
        '|',
        {
          name: 'save',
          action: this.onClickSave,
          className: 'fa fa-save',
          title: 'Save Article',
        },
      ],
    })
    this.mde.toggleFullScreen()
    this.mde.value(this.props.initText)
  }

  onClickSave = editor => {
    const content = editor.value()
    this.props.onSave(content)
  }

  render() {
    return (
      <div>
        <textarea ref={this.mdeRef}></textarea>
      </div>
    )
  }
}

Editor.propTypes = {
  initText: PropTypes.string,
  onSave: PropTypes.func,
}

export default Editor
