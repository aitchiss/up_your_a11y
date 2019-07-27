import React, { Component } from 'react'
import { Link } from 'gatsby'
import cardStyle from './topiccard.module.css'

class TopicCard extends Component {
  static getMainContent(topic, header) {
    if (header) {
      const takeaways = topic.keyTakeaways.map((x, index) => {
        return <li key={`takeaway-${index}`}>{x}</li>
      })
      return (
        <React.Fragment>
          <p>This topic will help you:</p>
          <ul>{takeaways}</ul>
        </React.Fragment>
      )
    } else {
      return <p>{topic.description} </p>
    }
  }

  headingRef = React.createRef()

  componentDidMount() {
    const { header } = this.props
    if (header) {
      this.headingRef.current.focus()
    }
  }

  render() {
    const {
      topic,
      headingLevel,
      accentColor,
      header,
      linkUrl,
      linkAriaLabel,
    } = this.props
    const Tag = 'h' + headingLevel
    return (
      <div
        className={cardStyle.topicContainer}
        style={{ boxShadow: `5px -10px ${accentColor}` }}
      >
        <div className={cardStyle.description}>
          <Tag>{topic.title}</Tag>
          <Tag
            ref={this.headingRef}
            tabIndex="-1"
            className={cardStyle.accessibilityHeader}
          >
            {topic.title}
          </Tag>
          {TopicCard.getMainContent(topic, header)}
        </div>
        {header ? null : (
          <div className={cardStyle.buttons}>
            <Link
              to={linkUrl}
              className={cardStyle.actionButton}
              aria-label={linkAriaLabel}
            >
              Let's go
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default TopicCard
