import React, { Component } from 'react'
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

  render() {
    const { topic, headingLevel, accentColor, header } = this.props
    const Tag = 'h' + headingLevel
    return (
      <div
        className={cardStyle.topicContainer}
        style={{ boxShadow: `5px -10px ${accentColor}` }}
      >
        <div className={cardStyle.description}>
          <Tag>{topic.title}</Tag>
          {TopicCard.getMainContent(topic, header)}
        </div>
        {header ? null : (
          <div className={cardStyle.buttons}>
            <Link to={`/topics/${topic.id}`}>
              <button className={cardStyle.actionButton}>Let's go</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default TopicCard
